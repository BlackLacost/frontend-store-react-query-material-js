import { useQuery } from 'react-query'
import { fetchTypes } from '../api/types.api'

export const useTypes = () =>
  useQuery('types', fetchTypes, { staleTime: Infinity })
