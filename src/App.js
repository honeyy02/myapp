import React from "react";
import "./App.css";
import Chatbot from "react-simple-chatbot";
import steps from "./MAIN-steps.js";
import userImg from "./assets/user11.jpg";
import chatbotImg from "./assets/soul11.jpg";

const config = {
  icon:  true,
  floating: true,
};
function App() {
  const stepsWithDelay = steps.map((step) => {
    if (step.hasOwnProperty("delay") || !step.hasOwnProperty("message")) {
      return step;
    } else {
      return {
        ...step,
        delay: 1000,
      };
    }
  });

  return (
    <div className="app-container">
      <div className="bot-wrapper">
        <Chatbot
        
          steps={stepsWithDelay}
          bubbleOptionStyle={{ backgroundColor: "white", color: "#b317b9" }}
          userAvatar={userImg}
          botAvatar={chatbotImg}
          headerTitle={'Soul-Sync'}
          width="50%"
          {...config}
        />
      </div>
    </div>
  );
}

export default App;