import React, { Component } from 'react';
//importando la data
import VarListaData from './ListaData';
import { observer } from 'mobx-react';

//lo hacemos observador de los cambios en la lista
class Lista extends Component{

  //mediante esta funcion interna de lista, vamos a configurar la accion para que
  // se lance solo cuando le damos enter
  enviarTarea(evento){
    if(evento.which === 13){
      VarListaData.agregarTarea( evento.target.value );
      //una vez que enviamos limpiamos el input
      evento.target.value = "";
    }
  }


  render(){
    //let a diferencia de var limita la variable al contexto, creamos un aray
    let listaDiv = [];

    //en esta constante volcamos el contenido que traemos en VarListaData
    // dentro de listaDiv (el valor dentro de <li>)
    // IMPORTATE VER COMO DECLARAMOS FUNCIONES CON ( => ) en el Foreach
    const agregarDiv = VarListaData.tareas.forEach(
      (value, index) => (
        // vamos a agregar un onclick en cada elemento para poder eliminarlo
          listaDiv.push(<li className="list-group-item" onClick={function(){VarListaData.eliminarTarea(index)}} key={index} > {value}</li>))
        )

    // cuando hacemos el return mostramos el contenido de listaDiv dentro del <ul>
    return(
      <div className="container">
        <h2>Lista</h2>
        <input onKeyPress={ this.enviarTarea.bind(this) }/>
        <div className="row">
          <div className="col-xs-12">
            <ul className="list-group">
              {listaDiv}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default observer(Lista);
