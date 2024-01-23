
const UserTableRow = ({item}) => {
 return (
  <tr>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <div className='flex items-between'>
     <div className='flex-shrink-0'>
      
     </div>
     <div className='ml-3'>
      <td className='text-gray-900 whitespace-no-wrap'>{item?.name}</td>
     </div>
    </div>
   </td>
  
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <p  className='text-gray-900 whitespace-no-wrap'>{item?.email}</p>
   </td>
  
  
   <td className='px-5 py-5 border-b border-gray-200 text-sm'>
    <button  className='relative cursor-pointer bg-emerald-500 rounded-lg inline-block px-3 py-1 font-semibold text-black leading-tight'>
     Make Moderator    
    </button>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <button  className='relative cursor-pointer rounded-lg inline-block px-3 py-1 bg-emerald-500 font-semibold text-black leading-tight'>
      Make Admin    
    </button>
   </td>
  </tr>
 );
};

export default UserTableRow;