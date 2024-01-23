import { NavLink } from "react-router-dom";
import logo from '/logo.png'
import Container from "../MainLayout/Container/Container";
import DropdownMenu from "../Component/Navbar/DropdownMenu";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  
  const navLinks =<>
  
  <li>
  <NavLink
    to="/"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Home
  </NavLink>
  </li>
  
  <li> <NavLink
    to="/products"
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    Products
  </NavLink>
  </li>
  </>



 return (
<div className="w-full bg-white shadow-lg z-10 fixed">
  <div className="border-b-[1px]">
  <Container>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
      <div>
        <img className="lg:mr-5 lg:w-48 md:block hidden h-28" src={logo} alt="" />
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <DropdownMenu></DropdownMenu>
  </div>
</div>

</Container>
  </div>
</div>
 );
};

export default Navbar;