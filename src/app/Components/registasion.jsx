import React from 'react'

const Registasion = () => {
     
  return (
    <div className="border-red-500 text-white border-2 p-4 m-4 text-center">
         <div className='text-2xl text-white text-center '>Registasion page here</div>
         <input type="text" placeholder="Enter your name" /> <br />
         <input type="email" placeholder="Enter your email" /> <br />
         <input type="password" placeholder="Enter your password" /> <br />
         <button className='bg-red-500 rounded-2xl py-3 px-2.5'>Register</button>
    </div>
  )
}

export default Registasion