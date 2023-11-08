import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4713558740msh95a2e0af9330433p136f4fjsn873760ae45a7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const response = await fetch(BASE_URL + url, options);
  const data = await response.json();
  return data;
};
