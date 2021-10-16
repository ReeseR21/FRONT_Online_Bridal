import React, { useState } from "react";
import API from "./ApiFile";

function Auth(){

    const [ username, setUsername ] = useState ('');
    const [ password, setPassword ] = useState('');

    const loginClicked = () => {
      API.loginUser(username, password)
        .then( response => console.log(response))
        .catch( error => console.log(error))
    }

    return (
      <div>
        <h3>Welcome to your online bridal experience. Register or Login</h3>
        <label htmlFor="username">Username</label><br/>
        <input id="username" type="text" placeholder="username" value={"username"}
            onChange={ event=> setUsername(event.target.value)}
        /><br/>

        <label htmlFor="password">Password</label><br/>
        <input id="password" type="password" placeholder="password" value={"password"}
            onChange={ event=> setPassword(event.target.value)} /><br/>
              <button onClick={loginClicked}>Login</button>
    
      </div>
    )
}

export default Auth;

// // import React, { useState } from 'react';
// import './App.css';

// function App() {

// // const [bridalprofile, setProfile] = useState();

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <center><h1>Simply Bridal of Phoenix</h1></center>
//                 <center><h3>Planning and Community</h3></center>
//                 <div className="layout">
//                 <div>Create</div>
//                 <div>Design</div>
//                 <div>Share</div>
//                 </div>
//                 <center><h3>For the bride who wants to keep it simple!</h3></center>
//             </header>
//         </div>
//     );
// }

// export default App;