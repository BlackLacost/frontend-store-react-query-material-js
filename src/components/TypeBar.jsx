import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { useTypes } from '../hooks/useTypes'
import { TYPE_ROUTE } from '../utils/consts'

export const TypeBar = () => {
  const { typeId } = useParams()
  const { isLoading, isFetching, data: types } = useTypes()

  return (
    <List>
      {isLoading
        ? '...'
        : types.map((type) => {
            return (
              <ListItem key={type.id} disablePadding>
                <ListItemButton
                  component={NavLink}
                  selected={type.id === Number(typeId)}
                  to={`${TYPE_ROUTE}/${type.id}`}
                >
                  <ListItemText
                    primary={`${type.name} ${isFetching ? '...' : ''}`}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
    </List>
  )
}
