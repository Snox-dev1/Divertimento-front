import Axios from 'axios';

let urls = {
  test: `http://localhost:3026`,
  development: 'http://localhost:3026/',
  production: 'https://api.lepunch.fr/',
};

export const ApiRequest = Axios.create({
  baseURL: 'http://localhost:3026/',
});
