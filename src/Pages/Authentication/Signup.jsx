import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { imgUpload } from '../../api/Utils';
import { saveUserInfo, token } from '../../api/auth';

const Signup = () => {
 const navigate = useNavigate()
 const { signUp, googleSignIn, profileInfo } = useAuth()
 const [sigupError, setSignupError] = useState('') || ''

 const handleFormSubmit = async e => {

  e.preventDefault();
  const displayName = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const image = e.target.photo.files[0];
  console.log(displayName, image, email, password);
  setSignupError('')


  try {
   //  img Upload
   const imagData = await imgUpload(image)

   // Create User
     const result =  await signUp(email, password)
   
     
  // UserName & Profile 
   const updateProfile = await profileInfo(displayName, imagData?.data?.display_url)
   console.log(updateProfile);

   // save userInfo to DB
   const response = await saveUserInfo(result.user)
      console.log(response)
      // result.user.email

      // get sccess token
      await token(result?.user?.email)
      toast.success('you successfully sign up')
      navigate('/')
  }
  catch (error) {
   setSignupError(error.message)

  }
  // const createdAt = result.user?.metadata?.creationTime;
  // const user = { displayName, photoURL, email, createdAt: createdAt }

  // fetch('https://server-two-gules.vercel.app/user', {
  //  method: 'POST',
  //  headers: {
  //   'content-type': 'application/json'
  //  },
  //  body: JSON.stringify(user)
  // })
  //  .then(res => res.json())
  //  .then(data => {
  //   console.log(data);

  // if (data.insertedId) {
  // Swal.fire({
  //  title: 'success!',
  //  text: 'Data Added Successfully',
  //  icon: 'success',
  //  confirmButtonText: 'Cool'
  // })
  //   }
  //  })
 }
 const handleGoogle = async () => {
try {
 const result = await googleSignIn()
  // save userInfo to DB
  const response = await saveUserInfo(result.user)
  console.log(response)

   // get sccess token
   await token(result?.user?.email)
   toast.success('you successfully sign up')
   navigate('/')

} catch (error) {
 setSignupError(error.message)
}
 }
 return (
  <div>
   <div className="card flex-shrink-0 w-full  shadow-2xl border">
    <form onSubmit={handleFormSubmit} className="card-body">

     {/* Name */}
     <div className="form-control">
      <label className="label">
       <span className="label-text text-white" >Name</span>
      </label>
      <input type="text" placeholder=" name" name='name' className="input input-bordered input-primary w-full text-black max-w-xs" required />
     </div>

     {/* email */}
     <div className="form-control">
      <label className="label">
       <span className="label-text text-white">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered input-primary w-full text-black max-w-xs " required />

     </div>

     {/* password */}
     <div className="form-control">
      <label className="label">
       <span className="label-text text-white">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered input-primary text-black w-full max-w-xs" required />

      <label className="label">
       <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
      </label>
     </div>

     {/* photo */}
     <div className="form-control">
      <label className="label">
       <span className="label-text text-white">Photo</span>
      </label>

      <input type="file" name="photo" id="photo" placeholder="Upload your Photo" required />
     </div>

     {
      sigupError &&
      <span className='text-red-700'>{sigupError}</span>
     }

     <div className="form-control mt-6">
      <button className="btn bg-blue-500">Signup</button>
     </div>

     <div className="form-control mt-2">
      <button type='button' onClick={handleGoogle} className="btn bg-blue-500">Login with Google</button>
     </div>
     <p> Already have an account?<Link to='/login'><button className="btn btn-active btn-link">Login Here</button></Link></p>
    </form>
    <div>
    </div>

   </div>

  </div>
 );
};

export default Signup;