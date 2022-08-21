import React from "react";
import "./currDate.css";

const curDat = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();

const currDate = () => {
  return (
    <div>
      <div className="date">
        {" "}
        {curDat} | {curTime}
      </div>
      {/* <div className="time">{curTime}</div> */}
    </div>
  );
};

export default currDate;
