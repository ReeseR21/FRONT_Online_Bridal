import React, { useState, useEffect } from "react";
import API from "./ApiFile";
import { useCookies } from 'react-cookie';

function Auth(){

    const [ username, setUsername ] = useState ('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);

    const [token, setToken] = useCookies(['vendortoken']);

    useEffect( () => {
        console.log(token);
      if(token['vendortoken']) window.location.href = '/vendors';
    }, [token])

    const loginClicked = () => {
      API.loginUser({username, password})
        .then( response => setToken('vendortoken', response.token))
        .catch( error => console.log(error))
    }
    const registerClicked = () => {
        API.registerUser({username, password})
            .then( () => loginClicked())
            .catch( error => console.log(error))
        }
        const isDisabled = username.length === 0 || password.length === 0;

    return (
            <div className="App">
                <header className="App-header">
                    {isLoginView ? <h1>Login</h1> : <h1>Register</h1>}
                </header>
                <div className="login-container">
                <label htmlFor="username">Username</label><br/>
                <input id="username" type="text" placeholder="username" value={username}
                    onChange={ event => setUsername(event.target.value)}
                /><br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password" placeholder="password" value={password}
                    onChange={ event => setPassword(event.target.value)} /><br/>
                        {isLoginView ?    
                        <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
                        <button onClick={registerClicked} disabled={isDisabled}>Register</button>
                    }

                { isLoginView ?
                <p onClick={()=> setIsLoginView(false)}>You don't have an account. Please register here.</p> :
                <p onClick={()=> setIsLoginView(true)}>You already have an account. Please login here.</p>  
                }     
            </div>
        </div>
    )
}

export default Auth;
