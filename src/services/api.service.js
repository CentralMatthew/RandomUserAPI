import axios from "axios";

let link = {
    baseURL: 'https://randomuser.me'
}

let axiosInstance = axios.create(link)

const getUsers = () => {
    return  axiosInstance.get('/api/');
}

const getUser = (id) => {
    return axiosInstance.get('/api/' + id)
}

export {
    getUser, getUsers, axiosInstance
}