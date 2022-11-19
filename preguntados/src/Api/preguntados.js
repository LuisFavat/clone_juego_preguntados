import axios from 'axios';

let Axios = axios.create({
    baseURL: 'https://preguntados-api.vercel.app',
    timeout: 10000,
})


const get = (url) => (
    Axios.get(url)
        .then(({data}) => data)
        .catch(error => Promise.reject(error.response.data))
)

const getDificulty = () => get('api/difficulty')


const Api = {
    getDificulty,
}

export default Api;

