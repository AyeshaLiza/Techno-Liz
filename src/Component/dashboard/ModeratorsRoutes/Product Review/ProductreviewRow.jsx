import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductreviewRow = ({product}) => {
 const {_id} = useParams()

 return (
  <tr>
  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
   <div className='flex items-between'>
    <div className='flex-shrink-0'>
     
    </div>
    <div className='ml-3'>
     <td className='text-gray-900 whitespace-no-wrap'>{product?.title}</td>
    </div>
   </div>
  </td>
 
 
 
  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
   <button  className='relative cursor-pointer bg-emerald-500 rounded-lg inline-block px-3 py-1 font-semibold text-black leading-tight'>
   <Link to={`/product-detail/${_id}`}>
    Product Detail
    </Link>  
   </button>
  </td>
  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
   <button  className='relative cursor-pointer bg-emerald-500 rounded-lg inline-block px-3 py-1 font-semibold text-black leading-tight'>
    Mark as Featured    
   </button>
  </td>
  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
   <button  className='relative cursor-pointer rounded-lg inline-block px-3 py-1 bg-emerald-500 font-semibold text-black leading-tight'>
    Accept    
   </button>
  </td>
  <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
   <button  className='relative cursor-pointer rounded-lg inline-block px-3 py-1 bg-emerald-500 font-semibold text-black leading-tight'>
    Reject    
   </button>
  </td>
 </tr>
 );
};

export default ProductreviewRow;