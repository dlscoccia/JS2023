import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.API_ROOT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Set up an interceptor to add the authorization header
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
