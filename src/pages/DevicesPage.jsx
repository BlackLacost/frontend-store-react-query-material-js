import { Grid } from '@mui/material'
import { DeviceCard } from '../features/Devices/DeviceCard'
import { useDevices } from '../features/Devices/useDevices.hook'

export const DevicesPage = () => {
  const { isLoading, isFetching, data } = useDevices()

  if (isLoading) return 'Loading Devices...'
  if (isFetching) return 'Update Devices...'

  return (
    <Grid container mt={0} spacing={3}>
      {data.devices.map((device) => (
        <Grid key={device.id} item xs={4}>
          <DeviceCard device={device} />
        </Grid>
      ))}
    </Grid>
  )
}
