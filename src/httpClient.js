import axios from "axios";

export default axios.create( {
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
    // headers: {
    //     'Set-Cookie': 'SameSite=None; Secure; Path=/; Partitioned'
    // }
    
})