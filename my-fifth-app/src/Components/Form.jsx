import React from 'react'

const Form = () => {
    
  return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10'>
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email' />
            <input className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='image url' />
            <input className='px-5 py-1 rounded-md bg-blue-500 text-white font-semibold' type="submit" />
        </form>
    </div>
  )
}

export default Form;