import React from "react";
import "./Words.css";
import { useNavigate } from "react-router";

const Words = () => {
  const navigate = useNavigate();
  const HandleBackButtonClicked = () => {
    navigate("/")
  };

  return (
    <div className="words">
      <div className="words--back_button" onClick={HandleBackButtonClicked}>
        &#x2190; Back
      </div>
      <div className="words--row">
        <div
          className="words--word words--first_animation_priority"
          style={{ fontSize: "25px" }}
        >
          Information Systems Technology
        </div>
        <div
          className="words--word words--second_animation_priority"
          style={{ fontSize: "18px" }}
        >
          Ecology
        </div>
        <div
          className="words--word words--third_animation_priority"
          style={{ fontSize: "20px" }}
        >
          Environment & Earth Sciences
        </div>
      </div>
      <div className="words--row">
        <div
          className="words--word words--third_animation_priority"
          style={{ fontSize: "30px" }}
        >
          Mathematics
        </div>
        <div
          className="words--word words--first_animation_priority"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          Computation & Data Sciences
        </div>
        <div
          className="words--word words--second_animation_priority"
          style={{ fontSize: "20px" }}
        >
          Physical Sciences
        </div>
      </div>
      <div className="words--row">
        <div
          className="words--word words--third_animation_priority"
          style={{ fontSize: "26px" }}
        >
          Chemical & Materials Sciences
        </div>
        <div
          className="words--word words--first_animation_priority"
          style={{ fontSize: "18px" }}
        >
          Biological & Biomedical Sciences
        </div>
      </div>
    </div>
  );
};

export default Words;
