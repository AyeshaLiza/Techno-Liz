import { axiosInstance } from "."

// post guest  product from Add ProductForm page
export const addProduct = async newProducts =>{
 const {data} = await axiosInstance.post(`/api/v1/products`, newProducts)
 return data
}

// get guest prduct for both guest & moderator
export const getProducts = async email=>{
try {
 const {data} = await axiosInstance(`/api/v1/products/${email}`)
 console.log(data);
 return data
} catch (error) {
 console.log(error.message);
}
}