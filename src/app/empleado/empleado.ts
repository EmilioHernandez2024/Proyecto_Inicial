import { Component } from '@angular/core';
import { Alumno } from "../alumno/alumno";

@Component({
  selector: 'app-empleado',
  imports: [Alumno],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class Empleado {
  nombre = "Juan";
  apellido = "Pérez";
  edad = 15;
  empresa = "UCAD";
  Catedratico2 = "Josue";
  private Catedratico = "Josue";

  constructor(){}

  getEdad(){
    return this.edad;
  }

  getcatedratico(){
    return this.Catedratico;
  }

    llamarcatedratico(catedratico: string){

  }

  llamar_empresa(empresa: string){
    
  }
}
