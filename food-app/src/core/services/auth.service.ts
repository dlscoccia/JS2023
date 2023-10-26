import axiosInstance from '@/core/config/axiosInstance'
import { apiEndpoints } from '../../shared/constants/api'

export const authRepository = {
  login: (data: any) => axiosInstance.post(apiEndpoints.endpointLogin, data),
  register: (data: any) =>
    axiosInstance.post(apiEndpoints.endpointRegister, data),
}
