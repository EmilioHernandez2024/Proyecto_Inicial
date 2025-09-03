import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-alumno',
  imports: [DatePipe,FormsModule,CommonModule],
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

colorTexto = "black";

contador = 0;

incrementar() {
  this.contador++;
}

decrementar() {
  this.contador--;
}

resetear() {
  this.contador = 0;
}

edad2 = 0;

acepta = false;

enviar() {
  alert("Formulario enviado con éxito");
}

estado = "Apagado";

cambiarEstado() {
  this.estado = this.estado === "Apagado" ? "Encendido" : "Apagado";
}
nombre3 = "Carlos";
apellido3 = "Ramírez";
edad3 = 20;

empresa4 = "Google";

mensajeRegistro = "No hay nadie registrado";

setRegistro(event: Event) {
  const valor = (event.target as HTMLInputElement).value;
  if (valor === "si") {
    this.mensajeRegistro = "Usuario registrado con éxito";
  } else {
    this.mensajeRegistro = "No hay nadie registrado";
  }
}

color = "background-color: red;";

cambiarColor() {
  this.color = this.color.includes("red")
    ? "background-color: blue;"
    : "background-color: red;";
}
activo = false;


}

