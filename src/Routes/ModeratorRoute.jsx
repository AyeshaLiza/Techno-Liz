import { Navigate, useLocation } from "react-router-dom";
import useRole from "../Hooks/useRole";

const ModeratorRoute = ({children}) => {
 const {role, isLoading} =  useRole();
 const location = useLocation()

//  console.log(location.pathname);
 if(isLoading){
    return  <div className="h-screen w-11/12 mx-auto"><span className="loading loading-spinner loading-lg"></span></div> 
 }
 if(role === 'host'){
  return children;
 }
 return <Navigate state={{from: location}} to={'/dashboard'} replace></Navigate>

};

export default ModeratorRoute;