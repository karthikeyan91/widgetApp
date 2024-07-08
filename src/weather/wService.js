export const fetchWeather = async (city) => {
  const apiKey = "d2580c5f7902cb37c3f929720be8c903";
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=tamil`;
  const response = await fetch(uri);

  if (!response.ok) {
    throw new Error("no weather response");
  }

  const data = await response.json();
  console.log(data, "data");
  return data;
};
