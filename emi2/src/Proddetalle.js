import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';

function Proddetalle(props){
    
    const [producto, setProducto] = useState({});

    useEffect(
        () => {
        fetch(`https://jsonfy.com/items/${props.match.params.id}`)
          .then(response => response.json())
          .then(data =>{
              
              setProducto(data[0])
          })
          .catch(error => {
              console.log(error);
          });
      }, []); 

    return(
        <div className="App-header"> 
            <div className="producto">
            <h4>Producto:</h4>
                <h4>Nombre</h4>
                <h2>{producto.name}</h2>
                <h4>Precio</h4>
                <h2>${producto.price}</h2>
                <h4>Descripción</h4>
                <h2>{producto.description}</h2>
                <h4>Imagen del Producto</h4>
                <img width="50" height="50" src={producto.photo_url}></img><br></br>
                <button type="submit" className="btn btn-dark">
                 Comprar
                </button>
            </div>
        </div>
    )
}

export default Proddetalle;
