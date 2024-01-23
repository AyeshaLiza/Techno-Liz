import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { token } from '../../../api/auth';


const Login = () => {
  const [loginError, setLoginError] = useState('') || ''
  const { signIn, logOut, googleSignIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname  ||  '/'

 const handleFormSubmit =async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password);
  setLoginError('')


  try {
    const result =  await signIn(email, password)       
    // const loggedInUser = user.user.email;
    // console.log(loggedInUser)
    // const res = await axios.post(url, {loggedInUser})
    //   console.log(res);

    // get token
    await token(result?.user?.email)
      toast.success('you successfully signin')
      navigate(from ,{replace: true})

  } catch (error) {
    // toast.error(error.message);
    // console.log(error.message);
    setLoginError(error.message)
  }

}
const handleGoogle  = async()  =>{
try {
   const result = googleSignIn()

  //  get token
  await token(result?.user?.email)
  toast.success('you successfully signup through google')
  navigate(from ,{replace: true})

  } 
  catch (error) {
  toast.error(error.message);
  setLoginError(error.message)

}
}
 return (
  <div>
  
  <div className="card flex-shrink-0 w-full shadow-2xl border shadow-base-300">
            <h1 className='text-center text-4xl font-semibold '>Login</h1>
            <form onSubmit={handleFormSubmit} className="card-body    ng-untouched ng-pristine ng-valid">
             <div>
             <div>
              <div className="form-control max-w-1/2">
                <label className="label">
                  <span className="label-text   text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered input-primary w-full max-w-1/2 text-black  "
                data-temp-mail-org='0' required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text   text-white">Password </span>
                </label>
                <input type="password" name='password' required placeholder="*****" className="input text-black input-bordered input-primary  w-full max-w-xs"   autoComplete='current-password'/>

                <label className="label">
                  <a href="#" className="label-text-alt link hover:underline link-hover   text-white">Forgot password?</a>
                </label>
              </div>
              {/* {
                loginError &&
                // <div className="toast toast-top toast-center">
                //   <div className="alert alert-info">
                //     <span>{loginError}</span>
                //   </div>

                // </div>
                <p className='text-red-700'>Wrong Password or email</p>
              } */}

              </div>

              <div>
              <div className="form-control mt-6">
                <button className="btn bg-red-700 text-white text-lg">Login</button>
              </div>

              <div className="form-control mt-6">
                <div onClick={handleGoogle} className="btn btn-primary hover:underline hover:text-rose-500">
                
                 Login with Google
             
                 </div>
              </div>
              <p>New User? Please <Link to='/signup'><button className="btn btn-orange-800 btn-link">Signup</button></Link></p>
              </div>
             </div>
            </form>


          </div>
  </div>
 );
};

export default Login;