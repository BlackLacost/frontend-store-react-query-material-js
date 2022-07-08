import { axiosInstance } from '../../axiosInstance'

export const fetchDevices = async () => {
  const res = await axiosInstance.get('devices?take=1000')
  return res.data
}
