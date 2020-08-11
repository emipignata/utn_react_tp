import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
import Proddetalle from './Proddetalle';
import firebase from './firebase';


function Detalle(props){
    return(
        <div>
            <div className="App-header"> 
                <div className="producto">
                    <h4>Producto:</h4>
                    <h4>Nombre</h4>
                    <h2>{props.data.name}</h2>
                    <h4>Precio</h4>
                    <h2>${props.data.price}</h2>
                    <h4>Imagen del Producto</h4>
                    <img width="50" height="50" src={props.data.photo_url}></img><br/>
                    <div className="btn-group">
                        <Link to={"/proddetalle/"+props.data.id}className="btn btn-dark">Ver Detalle</Link>
                    </div>
                </div>
            </div>{/* 
            <Switch>
                <Route path="/proddetalle/:id" exact component={Proddetalle}/>
            </Switch> */}
        {/* </Router> */}
        </div>
    )
}
export default Detalle;
