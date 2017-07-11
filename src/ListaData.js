import { extendObservable } from 'mobx';

class ListaData {
  constructor(){
      extendObservable(this,
      {  tareas:['Aprender React', 'Hacer app con react'] });
  }
}

var VarListaData = new ListaData;

export default VarListaData;
