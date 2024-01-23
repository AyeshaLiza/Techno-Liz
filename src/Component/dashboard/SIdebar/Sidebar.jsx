import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png'
import { HiMenuAlt2 } from "react-icons/hi";
import useRole from '../../../Hooks/useRole';

const Sidebar = () => {
  const [role] = useRole()
  console.log(role);
  console.log(role, 'our presenet role');
  const [isActive, setIsActive] = useState(false)
  const handleToggleBtn = () => {
    setIsActive(!isActive)
  }
  return (
    <div className='flex flex-col justify-between '>
      <div>
        {/* sidebar on small device */}
        <div className='flex justify-between md:hidden'>
          <div>
            <img className="lg:mr-5 lg:w-48 md:block hidden h-28" src={logo} alt="logo" />
          </div>
          <button onClick={handleToggleBtn} className='mobile-menu-button h-6 bg-gray-900  w-20'>
            <HiMenuAlt2 className='h-5 w-5' />
          </button>

        </div>
        <div className={`z-10 md:fixed flex flex-col justify-between border-r-[1px] overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`}>

          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <img src={logo} alt="" />
            </div>

            {/* nav menu */}
         


              <div className='flex flex-col justify-center text-center flex-1 mt-6'>
                {/* guest menu */}
              {role === 'guest' && <>
              <NavLink to='profile'>Profile</NavLink>
                <hr className='w-52' />
                <NavLink to="add-product" className="p-2 my-3  w-full">Add Product</NavLink>
                <NavLink to="listing-products" className="p-2 my-3  w-full">My  Products</NavLink>
              </>}
              {/* host menu */}
              {role === 'host' && <>
                <NavLink to="product-review" className="p-2 my-3  w-full">Product Review</NavLink>
                <NavLink to="reported-contents" className="p-2 my-3  w-full">Reported Contents</NavLink>
              </>}
              {role === 'admin' && <>
              
                <NavLink to="statistics" className="p-2 my-3  w-full">Statistics</NavLink>
                <NavLink to="manage-users" className="p-2 my-3  w-full">Manage Users</NavLink>
                <NavLink to="manage-coupons" className="p-2 my-3  w-full">Manage Coupons</NavLink>
              </>}
            

              </div>
            
            
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sidebar;