import axios from "axios"

export async function musicSearch(req, res) {
  console.log(req.query.q)
  
  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
    params: {
      q: `${req.query.q}`,
      // per_page: '10',
      // page: '1',
      // query: req.query.search
    },
    headers: {
      'X-RapidAPI-Key': process.env.XRapidAPIKey,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // console.log(res.json(response.data))
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }
}