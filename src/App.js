// import logo from "./logo.svg";
import "./App.css";
import "./tailwind.css"; // Import Tailwind CSS

import WForm from "./weather/wForm";
import WDisplay from "./weather/wDisplay";
import { fetchWeather } from "./weather/wService";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header p-[20px]">
        <h1>AllCast</h1>
      </header>
      <div className="grid grid-cols-2">
        <div className="flex flex-col m-auto max-w-[500px] p-4">
          <WForm onSearch={handleSearch} />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <WDisplay weather={weather} />
        </div>
        <div className="flex flex-col m-auto max-w-[500px] p-4">
          <WForm onSearch={handleSearch} />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <WDisplay weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default App;
