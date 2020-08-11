import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Home from './Pages/Home'
import Registro from './Registro';
import Login from './Login';
import Detalle from './Detalle';
import Proddetalle from './Proddetalle';
import firebase from './firebase';

class App extends Component{
  constructor(){
    super()
    console.log(firebase.database());
    this.state ={
      info:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonfy.com/items')
    .then(respuesta=>respuesta.json())
    .then(data =>{this.setState({info:data})
    })
  }
  /*
  {
    firebase.db.collection("productosFire")
    .get()
    .then(data => {this.setState({info:data})
    })
  }  
*/


 
  render(){
    return(
      <Router>
        <div className="App-header"> 
          <h1>APP</h1>
          <div className="container">
              <div className="btn-group">
                <Link to="/"className="btn btn-dark">Home</Link>
              </div>
              <div className="btn-group">
                <Link to="/registro"className="btn btn-dark">Registrate</Link>
              </div>
              <div className="btn-group">
                <Link to="/login"className="btn btn-dark">Login</Link>
              </div>
              
            
            <Switch>
              {/* Establecer como ruta los componentes para que no se rendericen siempre */}
              <Route path="/detalle" exact component={Detalle}/>
              <Route path="/login" exact component={Login} />
              <Route path="/registro" exact component={Registro} />
              <Route path="/proddetalle/:id" exact component={Proddetalle}/>

              
              <Home path="/" exact info={this.state.info}/>

            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
