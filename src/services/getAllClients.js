import axios from 'axios'

export const getAllClients = () => {
  return axios.get('http://localhost:3000/api/customers')
    .then(response => {
      const { data } = response
      return data
    })
}
