import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import DisplayPage from "../DisplayPage/DisplayPage";
import About from "../About/About";
import AstronomicalUnitModal from "../AstronomicalUnitModal/AstronomicalUnitModal";
import AzimuthModal from "../AzimuthModal/AzimuthModal";
import HorizontalLocationModal from "../HorizontalLocationModal/HorizontalLocationModal";
import Preloader from "../Preloader/Preloader";
import auth from "../../utils/auth";
import * as api from "../../utils/astronomyapi";
import authorize from "../../utils/auth";
import checkToken from "../../utils/auth";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [planetInfo, setPlanetInfo] = useState({});
  const [userInputInfo, setUserInputInfo] = useState({});
  const [preloader, setPreloader] = useState(false);
  const [dataDisplayError, setDataDisplayError] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  const navigate = useNavigate();

  const handleAstronomicalUnit = () => {
    setActiveModal("AU");
  };

  const handleHorizontalLocation = () => {
    setActiveModal("horizontal");
  };

  const handleAzimuth = () => {
    setActiveModal("azimuth");
  };

  const handleLoginOpen = () => {
    setActiveModal("login");
  };

  const handleRegisterOpen = () => {
    setActiveModal("signup");
  };

  const handleLoginSwitch = () => {
    handleModalClose();
    setActiveModal("login");
  };

  const handleSignUpSwitch = () => {
    handleModalClose();
    setActiveModal("signup");
  };

  const handleModalClose = () => {
    console.log("clicked");
    setActiveModal("");
  };

  const handleHeaderNavigate = () => {
    navigate("/");
  };

  const handleReturn = () => {
    setDataDisplayError(false);
  };

  const handleDisplayError = () => {
    setDataDisplayError(true);
    console.log("display error activated");
  };

  const handleSearch = ({ search, lat, long, from, to, time, elevation }) => {
    setUserInputInfo({ search, lat, long, from, to, time, elevation });
    api
      .getPositions({ search, lat, long, from, to, time, elevation })
      .then((data) => {
        console.log(data);
        setPlanetName(search);
        navigate("/infoPage");
        parsePlanetInfo(data);
        setPreloader(true);
      })
      .catch((error) => {
        setPreloader(false);
        handleDisplayError();
        console.error("error finding planet data", error);
      });
  };

  useEffect(() => {
    api
      .getPositions({ ...userInputInfo, search: planetName })
      .then((data) => {
        console.log(data);
        parsePlanetInfo(data);
        setPreloader(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [planetName]);

  function enablePreloader() {
    if (!handleSearch) {
      setPreloader(true);
    } else {
      setPreloader(false);
    }
  }

  function parsePlanetInfo(data) {
    setPlanetInfo({
      timeStamp: data.data.table.rows[0].cells[0].date,
      distance: data.data.table.rows[0].cells[0].distance.fromEarth.au,
      position:
        data.data.table.rows[0].cells[0].position.horizontal.altitude.degrees,
      azimuth:
        data.data.table.rows[0].cells[0].position.horizontal.azimuth.degrees,
    });
  }

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .auth({ email, password })
      .then(async (data) => {
        if (data.token) {
          console.log("signin successful");
          const userInfo = await getUserInfo(data.token);
          setToken(data.token);
          setCurrentUser(userInfo);
          setIsLoggedIn(true);
          handleModalClose();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page">
      {preloader ? (
        <Preloader enablePreloader={enablePreloader} />
      ) : (
        <div className="page__content">
          <Header
            handleRegisterOpen={handleRegisterOpen}
            handleLoginOpen={handleLoginOpen}
            handleHeaderNavigate={handleHeaderNavigate}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  displayError={dataDisplayError}
                  handleSearch={handleSearch}
                  handleReturn={handleReturn}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/infoPage"
              element={
                <DisplayPage
                  setPlanetName={setPlanetName}
                  planetName={planetName}
                  planetInfo={planetInfo}
                  handleAstronomicalUnit={handleAstronomicalUnit}
                  handleHorizontalLocation={handleHorizontalLocation}
                  handleAzimuth={handleAzimuth}
                  enablePreloader={enablePreloader}
                  DataError={dataDisplayError}
                />
              }
            />
          </Routes>
        </div>
      )}
      <Footer />
      <LoginModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "login"}
        handleSignUpSwitch={handleSignUpSwitch}
      />
      <RegisterModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "signup"}
        handleLoginSwitch={handleLoginSwitch}
      />
      <AstronomicalUnitModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "AU"}
      />
      <HorizontalLocationModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "horizontal"}
      />
      <AzimuthModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "azimuth"}
      />
    </div>
  );
}

export default App;
