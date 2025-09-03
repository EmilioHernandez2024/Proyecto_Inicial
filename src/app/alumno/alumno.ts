import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-alumno',
  imports: [DatePipe,FormsModule],
  templateUrl: './alumno.html',
  styleUrl: './alumno.css'
})
export class Alumno {

  public nombre = "Emilio";
  carrera ="Ing.Ciencia de la Computacion";
  edad=24;
  universidad = "";
  materia= "Programacion Web";
  fechaNacimiento = new Date(1999, 11, 15); 
  fechaIngreso = new Date(2020, 1, 1); 
  fechaEgreso = new Date(2024, 11, 15); 
  
  universidad_tipo(){
    if(this.universidad=="UES"){
      this.universidad = "UCA";
    }else{
      this.universidad = "UES";
    }

  }

  apellido = "Pérez";
  empresa = "NEVERIA";
  empresa2 = "GOOGLE";
  Nombre_empresa = "";
  habilitar_input_property = false;
  usuario_registrado_property = false;
  texto_registro = "No hay nadie registrado";
  dato = "";

  getInfo(){
  return `${this.nombre} - Año: ${this.fechaIngreso.getFullYear()} - Egreso: ${this.fechaEgreso.getFullYear()}`;
} 

  usuarios = {
    nombres: 'Juan'
  };
    aceptaTerminos: boolean = false;

    ciudadSeleccionada: string = 'Soyapango';

  texto_registrado= "";
  texto_usuario_registrado="";
  texto_registrado_property=false;

cambiar_nombre2(event: Event){
    this.dato = (event.target as HTMLInputElement).value;
  }

  cambiar_empresa2(event: Event){
    this.empresa2 = (<HTMLInputElement>event.target).value;
}
}

