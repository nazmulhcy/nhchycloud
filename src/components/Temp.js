import React, { useEffect } from "react";
import { useState } from "react";
import "./temp.css";

const Temp = () => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("Mumbai");
  const [weather, setWeather] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f04f03c0fe6edd00f283905b30ae5e6`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setCity(data.main);
      setWeather(data.weather);
      setCountry(data);
    };
    fetchAPI();
  }, [search]);

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type={"search"}
            className="inputField"
            placeholder="Put here Your City"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <h2 className="location">{search}</h2>
        </div>
        <div>
          <p>Type your nearest city to know the weather near to you</p>
        </div>
        <div className="box">
          {!city ? (
            <p>No data Found</p>
          ) : (
            <div className="info">
              <h2 className="locationS">
                {country.name}, {country.sys.country}
              </h2>
              <h3 className="weather">weather is {weather[0].main}</h3>

              <h1 className="temp"> {city.temp}&#176;C</h1>
              <h3 className="humidity">Humidity: {city.humidity}</h3>
              <h5 className="sun">
                {/* Sunrise: {secondsToHms("1661037929")} Sunset: */}
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Temp;
