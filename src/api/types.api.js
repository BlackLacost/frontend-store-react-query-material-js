import { api } from '.'

export const fetchTypes = async () => {
  const res = await api.get('types')
  return res.data
}
