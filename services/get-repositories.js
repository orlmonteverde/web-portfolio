import axios from 'axios'

import CONFIG from '../config/github-keys.json'

const GetRepos = () => {
  const URL = 'https://api.github.com/users/orlmonteverde/repos'
  return axios.get(URL, CONFIG)
}

export default GetRepos
