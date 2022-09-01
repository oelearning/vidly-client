import { useState, useEffect } from 'react'
import { Button } from '../components/Button'
import { Client } from '../components/Client'
import { getAllClients, createClient } from '../services'
import axios from 'axios'

export const ClientsPage = () => {
  const [clients, setClients] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gold, setGold] = useState(false)

  useEffect(() => {
    getAllClients()
      .then(client => {
        setClients(client)
      })
  }, [])

  const handleNameChange = (e) => {
    const listener = e.target.value
    setName(listener)
  }

  const handlePhoneChange = (e) => {
    const listener = e.target.value
    setPhone(listener)
  }

  const handleGoldChange = (e) => {
    const listener = e.target.checked
    setGold(listener)
  }

  const addClient = (e) => {
    e.preventDefault()
    const noteObject = {
      name,
      phone,
      isGold: gold
    }

    createClient(noteObject)
      .then(newClient => {
        setClients(clients.concat(newClient))
      })

    setName('')
    setPhone('')
  }

  const handleDelete = (id) => {
    const url = `http://localhost:3000/api/customers/${id}`
    axios.delete(url)
      .then(response => {
        const { data } = response
        const filter = clients.filter(client => client._id !== data.customer._id)
        setClients(filter)
        console.log(data.message)
      })
  }

  return (
    <div className='p-10 space-y-7'>
      <h1 className='text-3xl'>Clients</h1>

      <ul className='space-y-3'>
        {clients.map(({ _id, name, phone, isGold }) => (
          <Client
            key={_id}
            name={name}
            phone={phone}
            isGold={isGold}
            buttonClick={() => handleDelete(_id)}
          />
        ))}
      </ul>

      <form onSubmit={addClient}>
        {/* Name input */}
        <div className='space-y-5'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
            className='appearance-none border border-[#161b22] rounded-2xl p-4 bg-secondary text-gray-200 leading-tight focus:outline-none focus:border-purple-600 flex-1 w-full'
          />

          {/* Phone input */}
          <input
            type='text'
            placeholder='Phone'
            value={phone}
            onChange={handlePhoneChange}
            className='appearance-none border border-[#161b22] rounded-2xl p-4 bg-secondary text-gray-200 leading-tight focus:outline-none focus:border-purple-600 flex-1 w-full'
          />

          {/* isGold */}

          <label htmlFor='default-toggle' className='inline-flex relative items-center cursor-pointer'>
            <input
              type='checkbox'
              value={gold}
              onChange={handleGoldChange}
              id='default-toggle'
              className='sr-only peer'
            />
            <div className="w-11 h-6 bg-red-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
            <span className='ml-3 text-sm font-medium text-gray-200 dark:text-gray-300'>Gold membership</span>
          </label>

          <Button
            bgcolor='bg-purple-600'
            hover='bg-blue-800'
            textcolor='text-white'
            width='w-full'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
