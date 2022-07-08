import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export const DeviceCard = ({ device, isFetching }) => {
  return (
    <>
      <Card sx={{ p: 1 }} elevation={4}>
        <CardMedia
          component="img"
          height={300}
          sx={{ objectFit: 'contain' }}
          image={`${process.env.REACT_APP_IMAGE_HOST}/${device.img}`}
        />
        <CardContent>
          <Typography variant="subtitle1">
            {device.brand.name}
            {isFetching && '...'}
          </Typography>
          <Typography sx={{ minHeight: '6rem' }} variant="h6" component="h1">
            {device.name}
          </Typography>
          <Typography>{device.price} руб.</Typography>
        </CardContent>
      </Card>
    </>
  )
}
