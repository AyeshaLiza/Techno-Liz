import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout/Mainlayout/MainLayout";
import Error from "./Pages/Error/Error";
import LoginPage from "./Pages/Authentication/Login/LoginPage";
import SignupPage from "./Pages/Authentication/Signup/SignupPage";
import Dashboard from "./MainLayout/Dashboard LAyout/Dashboard";
import ProductReview from "./Component/dashboard/ModeratorsRoutes/Product Review/ProductReview";
import ReportedContents from "./Component/dashboard/ModeratorsRoutes/ReportedContents";
import ManageCoupons from "./Component/dashboard/AdminRoutes/ManageCoupons";
import ManageUsers from "./Component/dashboard/AdminRoutes/ManageUsers";
import Statistics from "./Component/dashboard/AdminRoutes/Statistics";
import PrivateRoute from "./Routes/PrivateRoute";
import ModeratorRoute from "./Routes/ModeratorRoute";
import AdminRoute from "./Routes/AdminRoute";
import AddProduct from "./Component/dashboard/GuestRoutes/Add Product/AddProduct";
import Profile from "./Component/dashboard/GuestRoutes/Profile/Profile";
import MyProductsListing from "./Component/dashboard/GuestRoutes/MyProducts/MyProductsListing";
import ProductDetail from "./Pages/Productdetail/ProductDetail";

const router = createBrowserRouter([
 {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <Error></Error>,
   children: [
    {
     path: '/',
     element: <h1>Home</h1>
    },
    {
     path: '/product-detail/:_id',
     element: <ProductDetail></ProductDetail>
    },
   ]
 },
 {
  path: '/login',
  element: <LoginPage></LoginPage>
 },
 {
  path: '/signup',
  element: <SignupPage></SignupPage>
 },
 {
   path: "/dashboard",
   element: <Dashboard></Dashboard>,
   errorElement: <Error></Error>,
   children: [
    {
     path: 'add-product',
     element: <PrivateRoute>
      <AddProduct></AddProduct> 
     </PrivateRoute>
    },
    {
     path: 'listing-products',
     element: <PrivateRoute>
      <MyProductsListing></MyProductsListing> 
     </PrivateRoute>
    },
    {
     path: 'profile',
     element: <PrivateRoute>
      <Profile></Profile> 
     </PrivateRoute>
    },
    {
     path: 'product-review',
     element: 
      <ProductReview></ProductReview> 
    
    },
    {
     path: 'reported-contents',
     element:
      <ReportedContents></ReportedContents> 

    },
    {
     path: 'manage-coupons',
     element: <ManageCoupons></ManageCoupons>
    },
    {
     path: 'manage-users',
     element: <ManageUsers></ManageUsers>
    },
    {
     path: 'statistics',
     element: <Statistics></Statistics>
    },
   
   ]
 },

]);

export default router;