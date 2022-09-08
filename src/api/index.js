import axios from "axios";
const baseUrl = 'http://localhost:5000';


export const fetchTasks = async () =>{
    
    return axios.get(`${baseUrl}/books`)
    .then(data => data)
    .catch(err => err);
    
    
}

