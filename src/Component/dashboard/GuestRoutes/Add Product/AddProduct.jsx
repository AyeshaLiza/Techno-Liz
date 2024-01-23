import toast from 'react-hot-toast';
import useAuth from '../../../../Hooks/useAuth';
import Title from '../../../../Shared/Title';
// import { imgUpload } from '../../../api/Utils';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import { addProduct } from '../../../../api/products';

const AddProduct = () => {
 const { user } = useAuth()
 const navigate = useNavigate()

 const handleSubmit = async e => {
  e.preventDefault()

  const form = e.target;
  const newProducts = {
   title: form.productTitle?.value || 'Not Given',
   img: form.productThumb?.files[0] || 'Not Given',
   productTags: form.tags?.value || 'Not Given',
   productText: form.productText?.value || 'Not Given',
   price: form.price?.value || 'Not Given',

   userName: user?.displayName  || 'not Given',
   userImage: user?.photoURL  || 'not Given',
   userEmail: user?.email   || 'not Given', 
  }
  console.log(newProducts);
  

  try {
   const prodData = await addProduct(newProducts)
   console.log(prodData);
   Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });
  navigate('/dashboard/listing-products')
  
  } catch (error) {
   console.log(error.message);
   toast.error(error.message)
  }
  
 }
 return (
  <div>
   <Title>Add Product</Title>
   <AddProductForm handleSubmit={handleSubmit}></AddProductForm>
  </div>
 );
};

export default AddProduct;