import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import useAuth from '../../Hooks/useAuth';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState()
  const { user, logOut } = useAuth()
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer hover:shadow-md '>


        <img className='w-10 h-10 rounded-full' src={avatar} alt="profile" />
      </div>
      {isOpen && (
        <div className='absolute  shadow-lg w-[40vw] md:w-[10vw] bg-white  overflow-hidden right-0 top-24 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-5 py-3 hover:bg-neutral-100 transition font-medium'
            >
              Home
            </Link>
            {
              user ? <>
                <Link to='/dashboard' className='px-5 py-3 hover:bg-neutral-100 transition font-medium' >  Dashboard </Link>
                <div onClick={logOut} className='px-5 py-3 hover:bg-neutral-100 transition font-medium' >  Logout </div>
              </>
                :
                <>
                  <Link
                    to='/login'
                    className='px-5 py-3 hover:bg-neutral-100 transition font-medium'
                  >
                    Login
                  </Link>
                  <Link
                    to='/signup'
                    className='px-5 py-3 hover:bg-neutral-100 transition font-medium'
                  >
                    Sign Up
                  </Link>
                </>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;