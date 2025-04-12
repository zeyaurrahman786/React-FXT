// import React from "react";
// import Card from "./Card.jsx";
// import "./App.css";
// import Button from "./Button.jsx";
// import Product from "./Product.jsx";
// import Title from "./Title.jsx";
// import Welcome from "./Welcome.jsx";
// import Profile from "./Profile.jsx";
// import Info from "./Info.jsx";
// import Btn from "./Btn.jsx";

// const App = () => {
//   // const handleClick = (btnName) => {
//   //   alert(`Hello World ${btnName}`);
//   // };

//   return (
//     <div>
//       {/* <Card /> */}
//       {/* <Button name={"Save"} onClick={() => handleClick("Save")} /> */}
//       {/* <Button name={"Click Me"} /> */}
      
//       {/* <Product 
//         productDetails={"Product 1"}
//         product={{ name: "Laptop", price: 999, description: "A high-end laptop" }}
//         buttonName="Add to Cart"
//       />
//       */}

//       {/* <Product
//         productDetails={"Product 2"}
//         product={{ name: "Mobile", price: 500, description: "A smartphone" }}
//         buttonName="Buy Now"
//       /> */}

//       {/* <Title /> */}

//       {/* <Welcome name="Zeyaur"/>
//       <Welcome name="Rahman"/> */}

//       <Profile username="zeyaur" age="25"/>
//       <Info name="Zeyaur" subject="React" />
//       <Btn onClick={() => alert("Clicked!")} />
//     </div>
//   );
// };

// export default App;






// import React from 'react'
// import Button from "./Button.jsx"
// import "./App.css"
// import Products from './Products.jsx'
// import Product from './Product.jsx'

// const App = () => {
//   return (
//     <div>
//       {/* <Button name="Save"/>
//       <Button name="Click"/>
//       <Button name="Update"/>
//       <Button name="Delete"/>
//       <Button name="Read more.."/> */}
//       {/* <Product /> */}
//       {/* <Products /> */}
//     </div>
//   )
// }

// export default App









// import "./App.css"
// import UserList from './UserList.jsx'

// const App = () => {
  
//   const userData = [{id: 1, name: 'John', email: 'john@example.com'}];

//   return (
//     <div>
//       <UserList users={userData}/>
//     </div>
//   )
// }

// export default App








// import "./App.css"
// import { useEffect, useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   function handleIncrement() {
//     setCount(count + 1);
//   }

//   function handleDecrement() {
//     setCount(count - 1);
//   }

//   function handleReset() {
//     setCount(0);
//   }


  // 2nd Counter

//   function handleNumberIncrement() {
//     setNumber(number + 1);
//   }

//   function handleNumberDecrement() {
//     setNumber(number - 1);
//   }

//   function handleNumberReset() {
//     setNumber(0);
//   }

//  useEffect(() => {
//   console.log("This is a side effect!");
//  }, [number, count])

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h3>Count: {count}</h3>
//       <button onClick={handleIncrement}>Increment</button>
//       &nbsp; &nbsp;
//       <button onClick={handleDecrement}>Decrement</button>
//       <br /> <br />
//       <button onClick={handleReset}>Reset</button>

//       <hr />

//       <h1>Counter App</h1>
//       <h3>Count: {number}</h3>
//       <button onClick={handleNumberIncrement}>Increment</button>
//       &nbsp; &nbsp;
//       <button onClick={handleNumberDecrement}>Decrement</button>
//       <br /> <br />
//       <button onClick={handleNumberReset}>Reset</button>
//     </div>
//   )
// }

// export default App



// What is State?
// State :- State is an object that holds the data of a component that can change over time.

// Difference between Props and State:
// Props are read-only and passed from parent;
// State is managed within the component and can be change.










// import React from 'react'
// import "./App.css"
// import Counter from './Counter.jsx'
// import Greeting from './Greeting.jsx'

// const App = () => {
//   return (
//     <div>
//       <Counter />
//       {/* <Greeting /> */}
//     </div>
//   )
// }

// export default App









import React from 'react';
import "./App.css";
import Jokes from './Jokes';

function App() {
  return (
    <>
      <Jokes />
    </>
  )
}

export default App