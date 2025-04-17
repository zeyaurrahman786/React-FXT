// useRef

// import React, { useRef } from 'react';

// const Form = () => {
//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name.current.value, age.current.value);

//   }

//   return (
//     <form className='p-4' onSubmit={handleSubmit}>
//       <input ref={name} type="text" placeholder='name' />
//       <input ref={age} type="text" placeholder='age' />
//       <input type="submit" />
//     </form>
//   )
// }

// export default Form;










// Controlled Components

// import React, { useState } from "react";

// const Form = () => {
//   const [value, setValue] = useState({ name: "", email: "" });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={(event) => setValue({...value, name: event.target.value })}
//           type="text"
//           placeholder="name"
//         />
//         <input
//           onChange={(event) => setValue({...value, email: event.target.value })}
//           type="email"
//           placeholder="email"
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default Form;








// Form Handling Rect Hook (npm install react-hook-form)

import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
  const {register, handleSubmit} = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <input {...register('name')} type="text" placeholder='name' />
        <input {...register('email')} type="email" placeholder='email' />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form