import React from 'react'


const Profilepage = () => {
  const username = localStorage.getItem("username")
  const email = localStorage.getItem("email")
  const firstName = localStorage.getItem("Firstname")
  const image = localStorage.getItem("image")
 



  

  return (
    
    <div className="flex justify-center items-center h-[calc(100vh-48px)] bg-slate-300">
      <div className="bg-slate-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-screen-md w-96 ">
        <label className='font-bold text-xl'>Username</label>
    <p  >{username}</p>
    <label className='font-bold text-xl'>Email</label>
    <p >{email}</p>
    <label className='font-bold text-xl'>Firstname</label>
    <p >{firstName}</p>
    <label className='font-bold text-xl'>Image</label>
    <p >{image}</p>
    </div>
    </div>
    
  )
}

export default Profilepage
