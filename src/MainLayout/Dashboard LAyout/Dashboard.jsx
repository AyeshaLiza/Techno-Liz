import { Outlet } from "react-router-dom";
import Sidebar from "../../Component/dashboard/SIdebar/Sidebar";

const Dashboard = () => {
 return (
  <div  >

  <main className='relative md:flex mx-auto min-h-screen'>
  <div className='grid py-5 gap-5 grid-cols-12  '>
  <div className='bg-red-100 col-span-3 '>
   <Sidebar></Sidebar>
   </div>
   <div className=' flex-1 md:ml-64 lg:ml-24 col-span-9'>
    <Outlet></Outlet>
   </div>
  </div>
  </main>
  </div>
 );
};

export default Dashboard;