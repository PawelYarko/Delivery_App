import axios from 'axios';

const axiosAPI = axios.create({
  baseURL:'https://delivery_back-1-g0671180.deta.app/api/',
});


export default axiosAPI;