import { useState } from 'react';
import { Helmet } from 'react-helmet';
import download from '../../../../assets/login/download.jpg'
import SubscriptionModal from './SubscriptionModal';
import useRole from '../../../../Hooks/useRole';
import useAuth from '../../../../Hooks/useAuth';

const Profile = () => {
 const {user} = useAuth()
 const {role} = useRole()
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
  <div className='bg-white mx-auto shadow-lg rounded-2xl w-4/5'>
    <img
      alt='profile'
      src={download}
      className='w-full mb-5 rounded-t-lg h-48'
    />
    <div className='flex flex-col items-center justify-center p-7 -mt-20'>
      <a href='#' className='relative block'>
        <img
          alt='profile'
          src={user?.photoURL}
          className='mx-auto object-cover rounded-full h-28 w-28  border-2 border-neutral-300 '
        />
      </a>

      <p className='p-2 px-4 text-xs text-white bg-cyan-500 rounded-full'>
        {role && role.toUpperCase()}
      </p>
     
      <div className='w-full p-4 mt-4 rounded-lg'>
        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
          <p className='flex flex-col'>
            Name
            <span className='font-bold text-lg text-gray-800 '>
              {user?.displayName}
            </span>
          </p>
          <p className='flex flex-col'>
            Email
            <span className='font-bold text-lg text-black '>{user?.email}</span>
          </p>

          <div className='my-5 text-center mx-auto flex flex-col justify-center '>
            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='bg-emerald-400 px-12 py-2 rounded-lg text-emerald-800 font-semibold text-xl cursor-pointer hover:bg-indigo-400 block mb-1'>
              Subscribe by 5$
            </button>
            <button className='bg-emerald-400 px-10 py-1 rounded-lg text-emerald-800 cursor-pointer hover:bg-indigo-400 block mb-1'>
              Update Profile
            </button>
            <button className='bg-emerald-400 px-9 py-1 rounded-lg text-emerald-800 cursor-pointer hover:bg-indigo-400'>
              Change Password
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