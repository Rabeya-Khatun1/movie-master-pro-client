
import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})



const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth();
const navigate = useNavigate();
    useEffect(() => {
    const requestInterceptors=   instance.interceptors.request.use((config) => {
            const token = user.accessToken
            if(token){
      console.log(token)
            config.headers.authorization = `Bearer ${token}`
            }
      
            return config
        })

const responseInterceptors =  instance.interceptors.response.use(res => {
return res;
}, err => {

console.log(err)
const status = err.status;
if(status===401 || status === 403){
    console.log('log out the user for bad request')
    // logOutUser()
    // .then( ()=>{
    //     navigate('/login')
    // })
}

})

        return () => {
            instance.interceptors.request.eject(requestInterceptors)
            instance.interceptors.response.eject(responseInterceptors)
        }

    }, [user, navigate, logOutUser])


    return instance;

}
export default useAxiosSecure