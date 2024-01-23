import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import MyListRow from "./MyListRow";
import { getProducts } from "../../../../api/products";

const MyProductsListing = () => {
 const { user, loading } = useAuth()
 const [products, setProducts] = useState([])
 useEffect(() => {
  getProducts(user?.email).then(data => {setProducts(data)
   }
   )
 }, [user])


 const handleDelete =() =>{
        
 }
 const handleUpdate =() =>{

 }
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
         Votes Count
        </th>
        <th
         scope='col'
         className='px-5 py-3 bg-white  border-b border-gray-200 normal'
        >
         Status
        </th>
        
        <th
         scope='col'
         className='px-5 py-3 bg-white  border-b border-gray-200 normal'
        >
         Delete
        </th>
        <th
         scope='col'
         className='px-5 py-3 bg-white  border-b border-gray-200 normal'
        >
         Update
        </th>
       </tr>
      </thead>
     <tbody>
      {products?.map((product) =>
       <MyListRow
        key={product._id}
         product={product}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          >
         </MyListRow>)}
     </tbody>

     </table>
    </div>
   </div>

  </div>
 );
};

export default MyProductsListing;