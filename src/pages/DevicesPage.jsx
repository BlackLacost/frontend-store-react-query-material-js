import { Grid, Pagination, Stack } from '@mui/material'
import { useParams, useSearchParams } from 'react-router-dom'
import { DeviceCard } from '../features/Devices/DeviceCard'
import { useDevices } from '../features/Devices/useDevices.hook'

export const DevicesPage = () => {
  const { typeId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const getPage = () => Number(searchParams.get('page')) || 1
  const { isLoading, isFetching, data } = useDevices({
    typeId,
    page: getPage(),
    take: 15,
  })

  if (isLoading) return 'Loading Devices...'

  return (
    <>
      <Stack direction="column" spacing={3} alignItems="center" mt={3}>
        <Pagination
          count={data.pages}
          page={getPage()}
          color="primary"
          onChange={(_, page) => {
            setSearchParams({ page })
          }}
        />
        <Grid container mt={0} spacing={3}>
          {data.devices.map((device) => (
            <Grid key={device.id} item xs={4}>
              <DeviceCard device={device} isFetching={isFetching} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={data.pages}
          page={getPage()}
          color="primary"
          onChange={(_, page) => {
            setSearchParams({ page })
          }}
        />
      </Stack>
    </>
  )
}
