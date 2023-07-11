import axios from "axios"

const BASE_URL = 'https://story-api.dicoding.dev/v1'

const axiosConfig = {
    baseURL: BASE_URL,
    timeout: 10000,
}

const HTTPRequest = axios.create(axiosConfig)

export default HTTPRequest