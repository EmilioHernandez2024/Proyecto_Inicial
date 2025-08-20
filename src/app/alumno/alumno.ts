import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-alumno',
  imports: [DatePipe],
  templateUrl: './alumno.html',
  styleUrl: './alumno.css'
})
export class Alumno {

  public nombre = "Emilio";
  carrera ="Ing.Ciencia de la Computacion";
  edad=24;
  universidad= "UCAD";
  materia= "Programacion Web";
  fechaNacimiento = new Date(1999, 11, 15); 
  fechaIngreso = new Date(2020, 1, 1); 
  fechaEgreso = new Date(2024, 11, 15); 

  getInfo(){
  return `${this.nombre} - Año: ${this.fechaIngreso.getFullYear()} - Egreso: ${this.fechaEgreso.getFullYear()}`;
}

}

