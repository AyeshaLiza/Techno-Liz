import { useState } from "react";
import { WithContext as ReactTags } from 'react-tag-input';
import useAuth from "../../../../Hooks/useAuth";

const KeyCodes = {
 comma: 188,
 enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const AddProductForm = ({handleSubmit}) => {
  const {user} = useAuth()
  const [tags, setTags]  = useState([
    { id: 'iPhone', text: 'iPhone' },
    { id: 'MacBook', text: 'MacBook' },
    { id: 'Laptop', text: 'Laptop' },
  ])


  const handleDelete = i => {
   setTags(tags.filter((tag, index) => index !== i));
  };
  
  const handleAddition = tag => {
   setTags([...tags, tag]);
  };
  
  const handleDrag = (tag, currPos, newPos) => {
   const newTags = tags.slice();
  
   newTags.splice(currPos, 1);
   newTags.splice(newPos, 0, tag);
  
      // re-render
      setTags(newTags);
    };
  
    const handleTagClick = index => {
      console.log('The tag at index ' + index + ' was clicked');
    };

 return (
<div className=" min-h-[calc(100vh-40px)]   text-black">
   
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
          <input type="file" placeholder="Product image" className="input w-full px-4 py-3 text-gray-800 border rounded-medium input-bordered flex-1"  name="productThumb"/>
         
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
          <ReactTags
            // name={tags}
          tags={tags}
          // suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
        </div> 

        {/* <ReactTag></ReactTag> */}
    
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
         
          <input type="file" disabled className="input w-full px-4 py-3 bg-gray-400 border rounded-medium input-bordered flex-1" required name="ownerImg" defaultValue={user?.photoURl}/>
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