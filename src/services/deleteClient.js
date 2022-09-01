import axios from 'axios'

export const deleteClient = ({ id }) => {
  return axios.delete(`http://localhost:3000/api/customers/${id}`)
    .then(response => {
      const { data } = response
      return data
    })
}
