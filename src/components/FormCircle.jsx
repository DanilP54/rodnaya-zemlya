import React, { useState } from "react";
import "./FeedbackCircle.css";
import { CgClose } from "react-icons/cg";
import { usePlayerContext } from "../context/usePlayerContext";

const FeedbackCircle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isOpen: open, isCollaps } = usePlayerContext();

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <div
          style={{
            bottom: open && !isCollaps ? "90px" : "20px",
          }}
          className="circle"
          onClick={toggleForm}
        ></div>
      )}

      {isOpen && (
        <div
          style={{
            bottom: open ? "90px" : "20px",
          }}
          className="feedback-form"
        >
          <button className="close-button" onClick={toggleForm}>
            <CgClose size={20} color="white" />
          </button>
          <h3>Ваши предложения</h3>
          <textarea
            disabled
            placeholder="Пожалуйста, зарегестрируйтесь, что бы предлагать фильмы, музыку, литературу и т.д"
            rows="5"
          ></textarea>
          <button disabled={true} className="submit-button">
            Отправить
          </button>
        </div>
      )}
    </div>
  );
};

export { FeedbackCircle };
