
const MyListRow = ({ product, handleDelete, handleStatus, handleUpdate }) => {
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
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <p className='text-gray-900 whitespace-no-wrap'>{product?.productTags}</p>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <p  onChange={handleStatus} className='text-gray-900 whitespace-no-wrap'>Status</p>
   </td>
  
  
   <td className='px-5 py-5 border-b border-gray-200 text-sm'>
    <span onClick={handleDelete} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight'>
     Delete    
    </span>
   </td>
   <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
    <span onClick={handleUpdate} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-black leading-tight'>
      Update    
    </span>
   </td>
  </tr>
 )
}

export default MyListRow