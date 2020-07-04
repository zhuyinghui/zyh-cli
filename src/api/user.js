import axios from '@/config/axios'
export function login () {
  return axios.get('/api/user/login')
}
