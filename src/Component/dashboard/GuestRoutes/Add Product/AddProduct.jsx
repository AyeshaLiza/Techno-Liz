import toast from 'react-hot-toast';
import useAuth from '../../../../Hooks/useAuth';
import Title from '../../../../Shared/Title';
// import { imgUpload } from '../../../api/Utils';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import { addProduct } from '../../../../api/products';
import { imgUpload } from '../../../../api/Utils';

const AddProduct = () => {
 const { user } = useAuth()
 const navigate = useNavigate()

 const handleSubmit = async e => {
  e.preventDefault()

  const form = e.target;
  
  const title = form.productTitle?.value || 'Not Given'
  const image = form.productThumb?.files[0] || 'Not Given'
   const productTags = form.tags?.value || 'Not Given'
  const productText = form.productText?.value || 'Not Given'
  const price = form.price?.value || 'Not Given'

  const userName = user?.displayName  || 'not Given'
  const userImage= user?.photoURL  || 'not Given'
  const userEmail= user?.email   || 'not Given'
  
  const image_url = await imgUpload(image)
  const newProducts ={title, productTags, productText, price, userEmail, userImage, userName,   image: image_url?.data?.display_url,}
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
 const handleImgChange = image => {

}
 return (
  <div>
   <Title>Add Product</Title>
   <AddProductForm handleSubmit={handleSubmit} handleImgChange={handleImgChange}></AddProductForm>
  </div>
 );
};

export default AddProduct;