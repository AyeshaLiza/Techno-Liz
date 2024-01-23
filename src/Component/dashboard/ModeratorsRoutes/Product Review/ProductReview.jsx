import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import { getProducts } from '../../../../api/products';
import ProductreviewRow from './ProductreviewRow';

const ProductReview = () => {

 const {user, loading} = useAuth()
  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ['products', user?.email],
    enabled: !loading,
    queryFn: async () => await getProducts(user?.email),
  })
  console.log(products)


 return (
  <div className="px-3 sm:px-5 mx-auto"> 
  <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
   <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
    <table className='min-w-full leading-normal'>

     <thead>
      <tr>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 '
       >
        Product Name
       </th>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
            Product Detail
       </th>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
        Make Featured
       </th>
       
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
        Accept Product
       </th>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
        Reject Product
       </th>
       
      </tr>
     </thead>
   <tbody>

    {products && products.map(product => <ProductreviewRow key={product._id} product={product}></ProductreviewRow>
    )}
   </tbody>

    </table>
   </div>
  </div>

 </div>
 );
};

export default ProductReview;