import axios from 'axios'

const CONFIG = {
  'client_id': process.env.CLIENT_ID,
  'client_secret': process.env.CLIENT_SECRET
}

const URL = 'https://api.github.com/users/orlmonteverde/repos'

const GetRepos = () => {
  return axios.get(URL, CONFIG)
}

export default GetRepos
