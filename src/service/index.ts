import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const aixosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
})

aixosInstance.interceptors.request.use(
  (config) => {
    config.headers!.icode = '47CD3D47C575726C'
    return config
  },
)

aixosInstance.interceptors.response.use((response) => {
  const { status, data } = response

  if (status === 200 && data && data.success && data.data) {
    ElMessage.success(data.message)
    return data
  }

  else {
    ElMessage.error(data.message)
    return Promise.reject(new Error(data.message))
  }
}, (error) => {
  ElMessage.error(error.message)
  return Promise.reject(new Error(error))
})

export default aixosInstance