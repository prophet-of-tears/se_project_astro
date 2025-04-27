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
import * as api from "../../utils/astronomyapi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [planetInfo, setPlanetInfo] = useState({});
  const [userInputInfo, setUserInputInfo] = useState({});

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

  const handleSearch = ({ search, lat, long, from, to, time, elevation }) => {
    setUserInputInfo({ search, lat, long, from, to, time, elevation });
    api
      .getPositions({ search, lat, long, from, to, time, elevation })
      .then((data) => {
        console.log(data);
        setPlanetName(search);
        navigate("/infoPage");
        parsePlanetInfo(data);
      })
      .catch((error) => {
        console.error("error finding planet data", error);
      });
  };

  // const checkInputInfo = () => {
  //   const keys = Object.keys(userInputInfo);
  //   const requiredFields = ["lat", "long", "from", "to", "time", "elevation"];
  //   const isMissingAny = requiredFields.some((field) => {
  //     !keys.includes(field);
  //   });
  //   console.log(isMissingAny);
  //   return isMissingAny;
  // };

  useEffect(() => {
    api
      .getPositions({ ...userInputInfo, search: planetName })
      .then((data) => {
        console.log(data);
        parsePlanetInfo(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [planetName]);

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

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleRegisterOpen={handleRegisterOpen}
          handleLoginOpen={handleLoginOpen}
          handleHeaderNavigate={handleHeaderNavigate}
        />

        <Routes>
          <Route path="/" element={<Main handleSearch={handleSearch} />} />
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
              />
            }
          />
        </Routes>
      </div>
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
