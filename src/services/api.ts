import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ecoleta-back-end.herokuapp.com'
})

export default api