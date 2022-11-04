// FROM TUESDAY - MONOLITHIC APPLICATION

import React from 'react'
import {useState, useEffect} from 'react'
// import Register from './components/Register'
import ReadUsers from './components/ReadUsers'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import Login from './components/Login'
import { getCookie } from './common'
import { findUser } from './utils'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const loginWithToken = async(cookie) => {
    const user = await findUser(cookie)
    setUser(user)
  }

  return (
    <div>
      <h1>Login</h1>
      <Login setter={setUser}/>
    {user ? 
      <div>
        <h2>Hello, Salem! My name's {user}! What's yours?</h2>
        <ReadUsers />
        <UpdateUser user={user}/>
        <DeleteUser user={user}/>
      </div>
      : 
      <h2>Oh y'all wanted a twist? Log in and let's get sickeninggggg!</h2>
    }

    </div>
  );
};

export default App;


























// FROM MONDAY


// import './App.css';
// import Box from './components/box';
// import {useState, useEffect} from 'react';

// function App() {

//   useEffect(() => {
//     fetchImages();
//   }, [])


//   const [user, setUser] = useState();
//   const [age, setAge] = useState();
//   const [photos, setPhotos] = useState([]);


//   // const array = [{name:"Jamie Rutter", age:"28"}, {name:"Scott Balfour", age:"30"}, {name:"Josh Hinkins", age:"29"}];

//   // for (let i=0; i< array.length; i++) {
//   //   console.log(array[i])
//   // }
// // the above is IDENTICAL to the below
//   // array.map((item, index) => {
//   //   console.log(index.item)
//   // })

//   const fetchImages = async () => {
//     const response = await fetch ("https://picsum.photos/v2/list");
//     const data = await response.json();
//     setPhotos(data);
//   }

//   return (
//     <div className="App">
//       {/* {array.map((item, index) => {
//         return (
//           <div>
//             <Box name={item.name} age={item.age}/>
//           </div>
//       )})} */}

//       {/* <img src="https://picsum.photos/v2/list" alt="a random photo from lorem picsum"/> */}

//       {/* <button onClick={(event) => fetchImages()}>Fetch the images!</button> */}

//       {photos.map((item, index) => {
//         return (
//           <div>
//             <img src={item.download_url} width="200px"/>
//             <h2>{item.author}</h2>
//           </div>
//         )
//       })}

//       {/* <input onChange={(event) => setUser(event.target.value)}/>
//       <input onChange={(event) => setAge(event.target.value)}/>
//       {user ?
//       <div><h1>Final Fantasy</h1>
//       <Box name="Tifa Lockhart" age="20"/>
//       <Box name="Terra Branford" age="18"/>
//       <Box name={user} age={age}/>
//       </div>
//       : <div>
//         <h1>this is the else part of the statement</h1>
//         </div>} */}
//     </div>
//   );
// }