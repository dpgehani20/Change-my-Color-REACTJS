// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{useState} from 'react';
import Tweet from "./Tweet";

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);



  const increment = () => {
   setCount(count +1);
   setRed(!isRed) ;
  };

  return(
    <div className ="app">
      {/* <Tweet name ="Dev ED" message="This is a random tweet" number="1000"/>
      <Tweet name ="John Snow" message="I am the true king" number="2000"/>
      <Tweet name ="Traversy Media" message="700k my dudes" number="500"/>
      <Tweet name ="Mosh" message="My new course is available" number="5000"/> */}

      <h2 className = {isRed ? 'red' : ""}>Change my color!!</h2>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
