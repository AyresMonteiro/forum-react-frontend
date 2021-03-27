import Axios from 'axios';
import { baseURL } from '../config/consts';

const api = Axios.create({ baseURL });

export default api;
