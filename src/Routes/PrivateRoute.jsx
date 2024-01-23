import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
 const {user, loading} =  useAuth()
 const location = useLocation()

//  console.log(location.pathname);
 if(loading){
    return  <div className="h-screen w-1/12 mx-auto"><span className="loading loading-spinner loading-lg"></span></div> 
 }
 if(user?.email){
  return children;
 }
 return <Navigate state={{from: location}} to={'/login'} replace></Navigate>

};

export default PrivateRoute;