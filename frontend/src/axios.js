import axios from 'axios';

axios.defaults.withCredentials = true;


axios.defaults.baseURL = 'http://localhost:8580';

export default axios;