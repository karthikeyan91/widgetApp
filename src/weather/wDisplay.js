import React from "react";

const WDisplay = ({ weather }) => {
  if (!weather) return null;
  return (
    <div className="flex flex-col mt-[20px]">
      <h2>{weather.name}</h2>
      <p>Temprature: {weather.main.temp}</p>
    </div>
  );
};

export default WDisplay;
