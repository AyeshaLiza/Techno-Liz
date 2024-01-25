import { useState } from 'react';
import { Helmet } from 'react-helmet';
import download from '../../../../assets/login/download.jpg'
import SubscriptionModal from './SubscriptionModal';
import useRole from '../../../../Hooks/useRole';
import useAuth from '../../../../Hooks/useAuth';

const Profile = () => {
 const {user} = useAuth()
 const [role] = useRole()
 const [isOpen, setIsOpen] = useState(false)
 const closeSubscrModal =() =>{
  setIsOpen(false)
 }
 return (
  <>
  <Helmet>
    <title>Profile </title>
  </Helmet>
  <div className='flex justify-center items-center  h-screen'>
  <div className='bg-teal-100 flex mx-auto shadow-lg '>
    
    <div className='flex items-center justify-center px-20 -ml-5 '>
      <a href='#' className='relative block'>
        <img
          alt='profile'
          src={user?.photoURL}
          className='mx-auto object-cover  h-36 rounded-full w-48  border-2 border-neutral-300 '
        />
      </a>

      <div className='w-full p-4 mt-4 rounded-lg'>
        <div className=' flex-wrap items-center justify-between text-sm text-gray-600 '>
          <p className='flex font-medium '>
            Name: 
            <span className='font-bold ml-2  text-gray-800 '>
              {user?.displayName}
            </span>
          </p>
          <p className='flex  font-medium'>
            Email
            <span className='font-bold ml-2  text-black '>{user?.email}</span>
          </p>
             <p className='p-2 px-4 text-xs '>
        Role:  {role && role.toUpperCase()}
      </p>
             <p className='p-2 px-4 text-xs  '>
        Status: 
      </p>
          <div className='my-5 text-center mx-auto flex flex-col justify-center '>
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='bg-emerald-400 px-12 py-2 rounded-lg text-emerald-800 font-semibold text-xl cursor-pointer hover:bg-indigo-400 block mb-1'>
              Subscribe by 5$
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<SubscriptionModal my_modal_5 ={'my_modal_5'}
 closeSubscrModal={closeSubscrModal}>
 </SubscriptionModal>
</>
 );
};

export default Profile;