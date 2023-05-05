import axios from "axios"

export function musicSearch(req, res) {
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: process.env.url,
    params: {
      q: '<REQUIRED>',
      per_page: '10',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': process.env.XRapidAPIKey,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}