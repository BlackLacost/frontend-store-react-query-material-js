import { useQuery } from 'react-query'
import { fetchDevices } from './devices.api'

export const useDevices = () => useQuery('devices', fetchDevices)
