import axios from 'axios'

export const createClient = ({ name, phone, isGold }) => {
  return axios.post('http://localhost:3000/api/customers', { name, phone, isGold })
    .then(response => {
      const { data } = response
      return data
    })
}
