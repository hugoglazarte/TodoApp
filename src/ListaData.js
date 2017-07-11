import { extendObservable } from 'mobx';

class ListaData {
  constructor(){
      extendObservable(this,
      {  tareas:['Aprender React', 'Hacer app con react'] });
  }

  //creamos la funcion para agregar tareas al array tareas
  agregarTarea(tarea){
      console.log(tarea);
      this.tareas.push(tarea);
  }
}

var VarListaData = new ListaData;

export default VarListaData;
