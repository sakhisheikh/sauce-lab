import axios from 'axios';
// constants
import { API_URL } from './constants';

// Place API calls here.

export default {
  getDevices: ({ region }) => {
    const URL = `${API_URL}/${region}`;
    return axios(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        // handle success
        return response;
      })
      .catch(error => {
        throw error;
      });
  },
  checkAvailability: ({ region = 'eu-availability' }) => {
    const URL = `${API_URL}/${region}`;
    return axios(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => {
        // handle success
        return response;
      })
      .catch(error => {
        throw error;
      });
  },
}
