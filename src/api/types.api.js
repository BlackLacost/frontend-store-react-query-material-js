import { axiosInstance } from '../axiosInstance'

export const fetchTypes = async () => {
  const res = await axiosInstance.get('types')
  return res.data
}
