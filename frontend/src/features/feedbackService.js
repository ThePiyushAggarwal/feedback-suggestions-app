import axios from 'axios'

const API_URL = '/api/feedbacks'

export const getFeedbacks = () => {
  return axios.get(API_URL).then((response) => response.data)
}
