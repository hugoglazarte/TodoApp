import React, { Component } from 'react';
//importando la data
import VarListaData from './ListaData';

class Lista extends Component{
  render(){
    //let a diferencia de var limita la variable al contexto, creamos un aray
    let listaDiv = [];

    //en esta constante volcamos el contenido que traemos en VarListaData
    // dentro de listaDiv (el valor dentro de <li>)
    // IMPORTATE VER COMO DECLARAMOS FUNCIONES CON ( => ) en el Foreach 
    const agregarDiv = VarListaData.tareas.forEach(
      (value, index) => (
          listaDiv.push(<li>{value}</li>))
        )

    // cuando hacemos el return mostramos el contenido de listaDiv dentro del <ul>
    return(
      <div>
        <h2>Lista</h2>
        <input/>
        <div>
          <div>
            <ul>
              {listaDiv}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Lista;
