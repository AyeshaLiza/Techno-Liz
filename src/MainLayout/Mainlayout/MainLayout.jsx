import React from 'react';
import Home from '../../Pages/Home/Home';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const MainLayout = ({children}) => {
 return (
  <div>
   <HelmetProvider>
   <Navbar></Navbar>
    <Outlet></Outlet>
   </HelmetProvider>
  </div>
 );
};

export default MainLayout;