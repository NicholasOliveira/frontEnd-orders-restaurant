import axios from 'axios'

export const ENDPOINT = 'http://localhost:5000'

export const api = axios.create({
  baseURL: ENDPOINT
})