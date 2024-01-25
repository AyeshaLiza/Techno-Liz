
import { getProducts } from '../api/products'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
const useProducts = () => {
  const { data: products, isLoading, refetch } = useQuery({
   queryKey: ['products'],
    queryFn: async () => await getProducts(),
   })
   console.log(products);
   return [products, isLoading, refetch]
  }

export default useProducts

