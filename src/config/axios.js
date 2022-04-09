import axios from 'axios';
import { SERVER_URL } from './contant';

export default axios({
    baseURL: SERVER_URL,
});
