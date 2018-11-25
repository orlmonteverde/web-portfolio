import axios from 'axios'

const CONFIG = {
  'client_id': process.env.CLIENT_ID,
  'client_secret': process.env.CLIENT_SECRET
}

const GetRepos = (URL) => {
  return axios.get(URL, CONFIG)
}

export default GetRepos
