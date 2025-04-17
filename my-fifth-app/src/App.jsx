import React from 'react'
import Cards from './Components/Cards';
import Form from './Components/Form';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([1]);

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'> 
      <div className="container mx-auto">
        <Cards users={users} />
        <Form />
      </div>
    </div>
  )
}

export default App;