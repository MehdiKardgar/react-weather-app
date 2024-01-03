// these data come from here
// https://rapidapi.com/wirefreethought/api/geodb-cities/

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7610c8cc0mshbfc7a7e4418b9ecp1862a0jsn538ee6dd4521", // "key" is unice that it comes from your account
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// these data come from here
//  https://openweathermap.org/
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "700222ca54de5db39a6e7d5f5766d79c";
