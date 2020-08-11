import React, { Component } from 'react';
import firebase from './firebase';

class Registro extends Component{
    render(){
        return(
            <div className="App-header"> 
                <h1>¡Hola amigo! Sería bueno que te registres en nuestro sitio.</h1>
                <hr/>
                <form>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" />
                    </label>
                    <br></br>
                    <label>
                        Apellido:
                        <input type="text" name="apellido" />
                    </label>
                    <br></br>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <br></br>
                    <label>
                        Telefono:
                        <input type="text" name="telefono" />
                    </label>
                    <br></br>
                    <input type="submit" value="Registrarse" /><br></br>
                </form>
            </div>
        )
    }
}
export default Registro;




