import axios from 'axios'

const backend = axios.create({
  baseURL: 'https://qzkdtiaoptrsobaxwczp.supabase.co/',
  withCredentials: true,
})

export {
  backend,
}