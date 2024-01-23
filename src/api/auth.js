import { axiosInstance } from "."

export const saveUserInfo = async user =>{
 const currentUsers = {
  name: user.displayName,
  email : user.email,
  role : 'guest',
  status: 'pending',
 }
 const {data} = await axiosInstance.put(`/users/${user?.email}`, currentUsers)
 return data
}

// get token
export const token = async email => {
 const { data } = await axiosInstance.post(`/access-token`, {email})
 // console.log('Token ', data)
 return data
}

// clear cookie from browser
export const clearCookie = async () => {
 const { data } = await axiosInstance.get('/logoutUser')
 return data
}
// get role
export const getSpecificRole = async email => {
 const { data } = await axiosInstance(`/user/${email}`)
 console.log(data);
 return data.role
}
// get all users
export const getAllUsers = async () => {
 const { data } = await axiosInstance(`/user`)
 console.log(data);
 return data
}