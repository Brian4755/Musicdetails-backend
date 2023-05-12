import axios from "axios"

export async function musicSearch(req, res) {
  console.log(req.query.q)
  console.log('this')
  
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
    // res.json(response.data);
    const responseID = response.data.hits[0].result.id
    res.json(responseID);
  } catch (error) {
    console.error(error);
  }
}