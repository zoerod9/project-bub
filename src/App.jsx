import { useState } from 'react'
import './App.css'
import React from 'react';
import logo from '/Users/zoerodriguez/Documents/codebase/my-react-app/src/assets/bubby.jpeg';

function App() {

  const [count, setCount] = useState(0)
  const user = {
    name: 'Bubby'
  }

  let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
  return (
    <>
      <div align="center" colspan="5" bgcolor="c0e4f5"><h2>Work Info</h2></div>
      <div class="box">
        <h2>Welcome to Work Info</h2>
      </div>
      <div>
      <div className="logo"></div>
      <img 
      className="avatar"
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
      src={logo} alt="Logo" />;
      <h1>{user.name}</h1>

{/* <div>{content}</div> */}
        <p>
          I currently work for a <i>health screening company</i> as a <b>Rescreen coordinator</b><br />
          I get to <i>work from home</i> so I quite <b>enjoy it</b><br />
          I would like to work for a <b>medical</b> company in their tech department, I think I would like to do web development, it seems quite <i>interesting</i> to me now. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nobis voluptate ducimus, inventore dolores est placeat quae nemo corporis ab error ullam numquam beatae dolorem fugiat earum? Consequatur ratione, autem ab laborum asperiores ex. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus adipisci dignissimos expedita voluptatum, blanditiis eos facilis non, dolores atque distinctio, debitis repudiandae facere laboriosam totam ipsa sequi, tenetur! Quasi delectus eius, consequatur neque ex blanditiis eos cumque fuga reprehenderit sunt qui maxime harum corporis rerum praesentium sapiente error veritatis incidunt.</p>
      </div>
        
        <MyButton />
    </>
  )


function MyButton() {
  return (
    <button>my button</button>
  );
}
}
export default App
