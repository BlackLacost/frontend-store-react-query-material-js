import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTypes } from '../hooks/useTypes'

export const TypeBar = () => {
  const { isLoading, isFetching, data: types } = useTypes()

  return (
    <List>
      {isLoading
        ? '...'
        : types.map((type) => (
            <ListItem key={type.id} disablePadding>
              <ListItemButton disableGutters component="a" href="#">
                <ListItemText
                  primary={`${type.name} ${isFetching ? '...' : ''}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
    </List>
  )
}
