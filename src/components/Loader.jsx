import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export default function Loader() {


  useEffect(() => {

  })
  return (
    <div className='flex-grow flex flex-col h-full justify-center bg-slate-100 rounde-md items-center animate-pulse container mx-auto'>

      <button className="bg-teal-900  px-4 rounded-lg flex" disabled >
        <svg className="animate-spin h-6 w-6 ms-2 mr-4 my-auto  bg-white rounded-md" viewBox="24 0 24 24">
        </svg>

        <span className='font-bold text-green-200 text-lg mx-2'> Loading ...</span>
      </button>
    </div>
  )
}
