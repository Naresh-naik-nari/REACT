import { productUrl, registerUrl } from "./Constants";

export const PostRegister = async (postdata) => {
    console.log(postdata)
    const respounce = await fetch(registerUrl, postdata)
    const data = await respounce.json()
    return data
}
export const GetLoginData = async (getdata) => {
    const respounce = await fetch(`${registerUrl}?username=${getdata.username}&&email=${getdata.email}&&password=${getdata.password}`)
    const data = respounce.json()
    return data
}
export const GetProductData=async()=>{
    const responce=await fetch(`${productUrl}`)
    const data=responce.json()
    return data
}