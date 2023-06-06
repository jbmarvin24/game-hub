import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '312db9cc026448a983ee71c2fc43b808',
  },
});
