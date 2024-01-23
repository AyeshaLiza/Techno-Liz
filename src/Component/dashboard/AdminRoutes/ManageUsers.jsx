import React from 'react';
import { getAllUsers } from '../../../api/auth';
import {  useQuery } from '@tanstack/react-query';
import UserTableRow from './UserTableRow';

const ManageUsers = () => {
 const { data: user = [], refetch, isLoading} = useQuery({
  queryKey: ['user'],
  queryFn: async () => await getAllUsers(),
})


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
        User Name
       </th>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
      User Email
       </th>
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
        Make MOderator
       </th>
       
       <th
        scope='col'
        className='px-5 py-3 bg-white  border-b border-gray-200 normal'
       >
        Make Admin
       </th>
       
      </tr>
     </thead>
   <tbody>

    {user && user.map(item => <UserTableRow key={item._id} item={item}></UserTableRow>
    )}
   </tbody>

    </table>
   </div>
  </div>

 </div>
 );
};

export default ManageUsers;