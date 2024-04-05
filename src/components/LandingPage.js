import React from "react";
import { useNavigate } from "react-router";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const HandleButtonClicked = () => {
    navigate("/words-sliding-intro");
  };

  return (
    <div className="landingPage">
      <div
        className="landingPage--option"
        onClick={() => {
          HandleButtonClicked(0);
        }}
      >
        Words Floating Intro
      </div>
    </div>
  );
};

export default LandingPage;
