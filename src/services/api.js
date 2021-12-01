import axios from 'axios'

const api = axios.create({
  baseURL: 'https://domingo-test-api.herokuapp.com/',
})

export default api
