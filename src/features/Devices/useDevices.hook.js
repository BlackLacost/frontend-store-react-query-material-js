import { useQuery } from 'react-query'
import { fetchDevices } from './devices.api'

export const useDevices = ({ typeId, page, take = 9 }) => {
  return useQuery(
    ['devices', typeId || 'all', { page: String(page) }],
    () => fetchDevices({ typeId, page, take }),
    { keepPreviousData: true }
  )
}
