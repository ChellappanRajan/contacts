// (function() {
//     const token = localStorage.getItem('');
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = token;
//     } else {
//         delete axios.defaults.headers.common['Authorization'];
//         /*if setting null does not remove `Authorization` header then try     
//           delete axios.defaults.headers.common['Authorization'];
//         */
//     }
// })();

import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;