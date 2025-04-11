// 1. Functional Components 


// import { useState } from "react";

// function Greeting() {
//     const [count, SetCount] = useState(0)
//     return (
//         <h1>
//             {count}
//         </h1>
//     )
// }
// export default Greeting;



// export default function Greeting(){
//     return (
//         <h1>Hello, World</h1>
//     )
// }


// For creating component we can use rafce
// rafce -> reactArrowFunctionExportComponent

import React from 'react';

const Greeting = () => {
  return (
    <div>
    <h1></h1>
    <p></p>
    <div className="conatiner"></div>
    <ul></ul>
    </div>
  )
};

export default Greeting;



// 2. Class Components 

// import React, { Component } from "react";
// import { useState } from "react";

// class Greeting extends Component {
//     const [count, setCount] = useState(0);
//     render() {
//         return (
//             <>
//                 <h1>{count}</h1>
//             </>
//         )
//     }
// }
// export default Greeting;




// React Fragments :- <> </> or <div></div>  
// React Fragment is a way to group multiple elements without adding an extra DOM node. This is useful when you need to return multiple elements from a component without wrapping them inside a <div> or another container.