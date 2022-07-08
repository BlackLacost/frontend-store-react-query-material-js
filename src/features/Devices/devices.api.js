import { axiosInstance } from '../../axiosInstance'

export const fetchDevices = async ({ typeId, page, take }) => {
  const res = await axiosInstance.get(
    `devices?take=${take}&typeId=${typeId}&page=${page}`
  )
  return res.data
}
