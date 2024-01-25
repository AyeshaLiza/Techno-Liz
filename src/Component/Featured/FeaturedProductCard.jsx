import { useState } from 'react';
import { BiUpvote } from "react-icons/bi";
import useAuth from '../../Hooks/useAuth';
import { axiosInstance } from '../../api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const FeaturedProductCard = ({ product, refetch, isLoading }) => {
  // console.log(product?.userEmail);
  const {user} = useAuth()
  const navigate = useNavigate()
  const handleUpvote =() =>{
    if (user && user?.email) {
      const votedProduct = {
          email: user?.email,
          prodName:product?.title,
          prodImage: product?.image,
          
      }
      axiosInstance.post('/upvote', votedProduct)
          .then(res => {
              console.log(res.data)
              if (res.data.insertedId) {
                  Swal.fire({
                     
                      icon: "success",
                      title: `you voted ${product?.title} successfully `,
                      showConfirmButton: false,
                      timer: 1500
                  });
                  // refetch cart to update the cart items count
                  refetch();
              }
  
          })
  }
  else {
      Swal.fire({
          title: "You are not Logged In",
          text: "Please login to make vote",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
      }).then((result) => {
          if (result.isConfirmed) {
              //   send the user to the login page
              navigate('/login', { state: { from: location } })
          }
      });
  }
  }
 return (

   < div>
   <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="card lg:w-72 group-hover:scale-110 transition h-80 mx-auto shadow-xl  shadow-zinc-400">
  <figure><img  src={product?.image} alt="product" className='h-52 w-72' /></figure>
  <div className="card-body">

  <div >
    <h1>{product?.title}</h1>
    <h1>{product?.productTags}</h1>
    <button onClick={handleUpvote} className='btn ' disabled={product?.userEmail === user?.email && 'disabled'}>  <BiUpvote className='text-black'/></button>
   
    </div>
  </div>
</div>
   </div>

 );
};

export default FeaturedProductCard;