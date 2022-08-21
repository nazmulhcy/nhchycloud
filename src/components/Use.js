import React from "react";

const Use = () => {
  return (
    <div className="container">
      <div className="use">
        <h3>How to Use:</h3>
        <p>
          This application is helpful to know the current weather condition of
          you local area{" "}
        </p>
        <p>In the input area type your local City</p>
        <p>
          Application will try to fetch the data on your each hit on key if the
          data is available then it will shown to you
        </p>
        <p>The information like temperature, humidity will be shown to you </p>
      </div>
      <h3>For any Query Contact Us </h3>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfVYoL-FGjRG7d3CrqeVT5sFg35gecJya9eyRD9wWs_j0eklQ/viewform?embedded=true"
        width="640"
        height="947"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Use;
