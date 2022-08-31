import { useState } from 'react'

export const ClientsPage = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gold, setGold] = useState('')

  const handleNameChange = (e) => {
    const listener = e.target.value
    setName(listener)
  }

  const handlePhoneChange = (e) => {
    const listener = e.target.value
    setPhone(listener)
  }

  const handleGoldChange = (e) => {
    const listener = e.target.value
    setGold(listener)
  }

  return (
    <div className='p-10 space-y-7'>
      <h1 className='text-3xl'>Clients</h1>

      <form>
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
              id='default-toggle'
              className='sr-only peer'
            />
            <div className="w-11 h-6 bg-red-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600" />
            <span className='ml-3 text-sm font-medium text-gray-200 dark:text-gray-300'>Gold membership</span>
          </label>
        </div>
      </form>
    </div>
  )
}
