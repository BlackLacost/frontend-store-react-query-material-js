import { axiosInstance } from '../../axiosInstance'

export const fetchDevices = async (typeId) => {
  const res = await axiosInstance.get(`devices?take=1000&typeId=${typeId}`)
  return res.data
}
