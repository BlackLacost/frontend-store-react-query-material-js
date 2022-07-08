import { useQuery } from 'react-query'
import { fetchDevices } from './devices.api'

export const useDevices = (typeId) => {
  return useQuery(['devices', typeId || 'all'], () => fetchDevices(typeId))
}
