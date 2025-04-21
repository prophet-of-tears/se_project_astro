import "./App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import DisplayPage from "../DisplayPage/DisplayPage";
import * as api from "../../utils/api";

import { getPositions } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [planetName, setPlanetName] = useState("");

  const navigate = useNavigate();

  const handleLoginOpen = () => {
    setActiveModal("login");
  };

  const handleRegisterOpen = () => {
    setActiveModal("signup");
  };

  const handleModalClose = () => {
    console.log("clicked");
    setActiveModal("");
  };

  const handleHeaderNavigate = () => {
    navigate("/");
  };

  const handleSearch = ({ lat, long, from, to, time }) => {
    api.getPositions({ lat, long, from, to, time }).then((data) => {
      console.log(data);
      return data;
    });
  };

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
          <Route
            path="/infoPage"
            element={
              <DisplayPage
                setPlanetName={setPlanetName}
                planetName={planetName}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
      <LoginModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "login"}
      />
      <RegisterModal
        handleModalClose={handleModalClose}
        isOpen={activeModal === "signup"}
      />
    </div>
  );
}

export default App;
