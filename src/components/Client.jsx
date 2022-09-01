export const Client = ({
  name = 'Name missing',
  phone = 'Body missing',
  isGold = false,
  buttonClick
}) => {
  return (
    <li className='bg-secondary p-4 rounded-lg flex justify-between items-center text-gray-300'>
      <div className='flex items-center space-x-5'>
        <p>{name}:</p>
        <p>{phone}</p>
      </div>

      {isGold
        ? <div className='w-20 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center'>
          <span>Gold</span>
          </div>
        : null}

      <button
        className='bg-red-600 rounded-xl py-2 px-4 text-white'
        onClick={buttonClick}
      >
        Delete
      </button>
    </li>
  )
}
