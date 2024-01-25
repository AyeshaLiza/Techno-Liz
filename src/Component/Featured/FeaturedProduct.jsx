import React, { useEffect, useState } from 'react';
// import ImgSliderCard from './ImgSliderCard';
// import Container from '../MainLayout/Container'
// import ReactTab from './ReactTab';
import useProducts from '../../Hooks/useProducts';
import FeaturedProductCard from './FeaturedProductCard';
import useAuth from '../../Hooks/useAuth';
import { axiosInstance } from '../../api';

const FeaturedProduct = () => {
const [products, refetch, isLoading] = useProducts()

console.log(products);


 return (
  <> 
  <div >
  <div className=' w-[90%] mx-auto my-5'>
    <h1 className='text-5xl font-semibold text-amber-500 text-center my-16'>Featured Room</h1>

    <div  className='grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
    {
     products?.map((product) =>
     <FeaturedProductCard 
     key={product._id}
      product ={product}
      refetch={refetch}
      isLoading={isLoading}
     ></FeaturedProductCard>
     )
    
    }
  </div>
  </div>
  </div>
  </>
 );
};

export default FeaturedProduct;