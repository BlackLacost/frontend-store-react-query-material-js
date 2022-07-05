import { Box, Typography } from '@mui/material'
import { FaStore } from 'react-icons/fa'

export const Logo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <FaStore />
      <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} component="h3">
        Купи девайс
      </Typography>
    </Box>
  )
}
