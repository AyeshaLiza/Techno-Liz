
import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'
import { getSpecificRole } from '../api/auth'
import {  useState } from 'react'
const useRole = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const { data: role, isLoading } = useQuery({
   queryKey: ['role'],
    enabled: !loading && !!user?.email,
    queryFn: async () => await getSpecificRole(user?.email),
  })
  return [role, isLoading]
}

export default useRole