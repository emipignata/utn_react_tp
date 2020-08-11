import React, { Component } from 'react';
import firebase from './firebase';

class Login extends Component{
    render(){
        return(
            <div className="App-header"> 
                <h1>¡Es bueno tenerte de nuevo por aquí!</h1>
                <h3>Por favor, logueate con tu usuario y contraseña.</h3>
                <hr/>
                <form>
                <label>Email</label><br></br>
                <input name="email" type="text" placeholder="Ingresá tu email" />
                <br></br>
                <label>Password</label><br></br>
                <input
                    name="password"
                    type="password"
                    placeholder="Ingresá tu password"
                /><br/>
                <button type="submit" >
                    Login
                </button>
                </form>
                
            </div>
        )
    }
}
export default Login;




