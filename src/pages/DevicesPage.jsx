import { Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import { DeviceCard } from '../features/Devices/DeviceCard'
import { useDevices } from '../features/Devices/useDevices.hook'

export const DevicesPage = () => {
  const { typeId } = useParams()
  const { isLoading, isFetching, data } = useDevices(typeId)

  if (isLoading) return 'Loading Devices...'

  return (
    <Grid container mt={0} spacing={3}>
      {data.devices.map((device) => (
        <Grid key={device.id} item xs={4}>
          <DeviceCard device={device} isFetching={isFetching} />
        </Grid>
      ))}
    </Grid>
  )
}
