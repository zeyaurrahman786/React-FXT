// Form Handling 

// useRef -> useRef is a hook in React that allow you to create a mutable reference that persists across re-renders.

// It is used for :- 
// 1. Accessing DOM elements directly 
// 2. Storing mutable values that don't trigger a re-render when updated.




import React, { useRef } from 'react'

const Form = () => {
    const name = useRef(null);
    const email = useRef(null);

    const handleSubmit = ((event) => {
        event.preventDefault();
        console.log(name.current.value, email.current.value);
    })

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={name} type="text" placeholder='name' />
            <input ref={email} type="email" placeholder='email' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form