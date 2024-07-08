import React, { useState } from "react";

const WForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <>
      <h2 className="mb-4">Weather</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          className="border border-solid border-[#999] h-[40px] mb-[10px] text-center rounded-[4px]"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <button
          className="rounded-full bg-cyan-500 py-2 px-4 text-white w-fit mx-auto"
          type="submit"
        >
          Get Weather
        </button>
      </form>
    </>
  );
};
export default WForm;
