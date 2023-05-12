import axios from "axios";

export async function idSearch(req, res) {
  console.log('here here here', req.query.id)
  const options = {
    method: 'GET',
    url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
    params: {
      id: `${req.query.id}`,
    },
    headers: {
      'X-RapidAPI-Key': process.env.XRapidAPIKey,
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    // console.log(response);
    res.json(response.data)
  } catch (error) {
    console.error(error);
  }
}