import axios from 'axios'
export const login=(body)=>{
    return axios.post("https://dummyjson.com/auth/login",body)
}

