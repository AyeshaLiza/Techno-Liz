
import {  useState } from 'react'

import useAuth from './useAuth'
import { getSpecificRole } from '../api/auth'
import { useQuery } from '@tanstack/react-query'
const useRole = () => {
  const { user, loading } = useAuth()
  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getSpecificRole(user?.email),
    queryKey: ['role'],
  })

  return [role, isLoading]
}

export default useRole

