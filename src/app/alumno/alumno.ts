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

// 1. Lista dinámica de empleados
  empleados: string[] = [];
  nuevoEmpleado: string = '';

  agregarEmpleado() {
    if (this.nuevoEmpleado.trim() !== '') {
      this.empleados.push(this.nuevoEmpleado);
      this.nuevoEmpleado = '';
    }
  }

  eliminarEmpleado(i: number) {
    this.empleados.splice(i, 1);
  }

  // 2. Mostrar/Ocultar contenido
  mostrarInfo: boolean = false;

  // 3. Contador
  contador2: number = 0;
  incrementar2() { this.contador++; }
  decrementar2() { this.contador--; }
  resetContador() { this.contador = 0; }

  // 4. Login falso
  usuario: string = '';
  password: string = '';
  loginMensaje: string = '';

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.loginMensaje = 'Bienvenido admin';
    } else {
      this.loginMensaje = 'Credenciales incorrectas';
    }
  }

  // 5. ToDo List
  tareas: { texto: string, completada: boolean }[] = [];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  tareasPendientes() {
    return this.tareas.filter(t => !t.completada).length;
  }

  // 6. Select dinámico
  paises: string[] = ['El Salvador', 'México', 'Guatemala'];
  paisSeleccionado: string = '';
  nuevoPais: string = '';

  agregarPais() {
    if (this.nuevoPais.trim() !== '') {
      this.paises.push(this.nuevoPais);
      this.nuevoPais = '';
    }
  }

  // 7. Cambio de estilos
  fontSize: string = '16px';
  colorTexto2: string = 'black';

  cambiarTamano() {
    this.fontSize = this.fontSize === '16px' ? '24px' : '16px';
  }

  cambiarColorTexto() {
    this.colorTexto = this.colorTexto === 'black' ? 'blue' : 'black';
  }

  // 8. Tabla de productos
  productos = [
    { nombre: 'Laptop', precio: 800 },
    { nombre: 'Mouse', precio: 20 },
    { nombre: 'Teclado', precio: 50 }
  ];
  ordenAsc: boolean = true;

  ordenarProductos() {
    this.productos.sort((a, b) =>
      this.ordenAsc ? a.precio - b.precio : b.precio - a.precio
    );
    this.ordenAsc = !this.ordenAsc;
  }

  // 9. Mini calculadora
  num1: number = 0;
  num2: number = 0;
  operador: string = '+';
  resultado: string = '';

  calcular() {
    switch (this.operador) {
      case '+': this.resultado = (this.num1 + this.num2).toString(); break;
      case '-': this.resultado = (this.num1 - this.num2).toString(); break;
      case '*': this.resultado = (this.num1 * this.num2).toString(); break;
      case '/': this.resultado = this.num2 !== 0 ? (this.num1 / this.num2).toString() : 'Error: división por 0'; break;
      case '%': this.resultado = (this.num1 % this.num2).toString(); break;
      default: this.resultado = 'Operador inválido';
    }
  }

  // 10. Cronómetro
  tiempo: number = 0;
  intervalId: any;

  iniciarCrono() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.tiempo++, 1000);
    }
  }

  pausarCrono() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetCrono() {
    this.pausarCrono();
    this.tiempo = 0;
  }
}




