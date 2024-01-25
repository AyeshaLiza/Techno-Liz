import { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const AddProductForm = ({handleSubmit, handleImgChange}) => {
  const {user} = useAuth()


 return (
<div className=" min-h-[calc(100vh-40px)]   text-black">
<div className='flex items-center justify-center  '>
      <a href='#' className='relative block'>
        <img
          alt='profile'
          src={user?.photoURL}
          className='mx-auto object-cover  h-24 w-24 rounded-full  border-2 border-neutral-300 '
        />
      </a>

    </div>
      <form onSubmit={handleSubmit} className="card-body">

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      
          <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product title" className="input w-full px-4 py-3 text-gray-800 border rounded-medium input-bordered flex-1" required name="productTitle"/>
        </div>
       <div className="form-control">
       <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          {/* <input type="file" placeholder="Product image" className="input w-full px-4 py-3 text-gray-800 border rounded-medium input-bordered flex-1"  name="productThumb"/> */}
          <input
                      onChange={e => handleImgChange(e.target.files[0])}
                      className="input w-full px-4 py-3 text-gray-800 border rounded-medium input-bordered flex-1"
                      type='file'
                      name='productThumb'
                      
                    />
        </div>
      
      
       <div className="form-control">
       <label className="label">
            <span className="label-text">Product Description</span>
          </label>         
          <input type="text" placeholder="description here" className="input w-full px-4 py-3  bg-gray-300 border rounded-medium input-bordered flex-1" required name="productText"/>
        </div>
      
     
    
        <div className="form-control">
       <label className="label">
            <span className="label-text">Product Tags</span>
          </label>         
         
        </div> 

    
       <div className="form-control">
       <label className="label">
            <span className="label-text">External Link</span>
          </label>         
          <input type="url" placeholder="Enter Some youtube link" className="input w-full px-4 py-3 text-gray-800 border rounded-medium input-bordered flex-1"  name="productLink"/>
        </div>
    
       <div className="form-control">
       <label className="label">
            <span className="label-text">Product Owner Name</span>
          </label>         
          <input type="text" className="input w-full px-4 py-3 bg-gray-900 border rounded-medium input-bordered flex-1" required name="ownerName" disabled defaultValue={user?.displayName}/>
        </div>
       <div className="form-control">
       <label className="label">
            <span className="label-text"> Owner Email</span>
          </label>         
          <input type="email" className="input w-full px-4 py-3 bg-gray-400 border rounded-medium input-bordered flex-1" disabled required name="ownerName" defaultValue={user?.email}/>
        </div>
       <div className="form-control">
       <label className="label">
            <span className="label-text"> Owner Image</span>
          </label>         
         
          <input type="url" disabled className="input w-full px-4 py-3 bg-gray-400 border rounded-medium input-bordered flex-1" required name="ownerImg" defaultValue={user?.photoURl}/>
        </div>
     
        <div className="form-control mt-5 w-full mx-auto">
          <button className="btn btn-accent ">Add A Product</button>
        </div>
        </div>
      </form>

   </div>
  
 );
};

export default AddProductForm;