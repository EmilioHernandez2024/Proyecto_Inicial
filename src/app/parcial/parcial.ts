import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcial',
  imports: [CommonModule,FormsModule],
  templateUrl: './parcial.html',
  styleUrl: './parcial.css'
})
export class Parcial {


////Ejercicio 1
nombre = '';
  apellido = '';
  edad: number | null = null;
  universidad = '';
  inscrito = true;
  becado = false;
  colorTexto = '#000000';
  colorInicial = '#000000'; 

  restablecerColorTexto() {
  this.colorTexto = this.colorInicial;
}

num1: number = 0;
  num2: number = 0;
  operacion: string = '+';
  negrita = false;
  colorResultado = '#000000';

  ////Ejercicio 2

  calcular(): number {
    switch (this.operacion) {
      case '+': return this.num1 + this.num2;
      case '-': return this.num1 - this.num2;
      case '*': return this.num1 * this.num2;
      case '/': return this.num2 !== 0 ? this.num1 / this.num2 : 0;
      default: return 0;
    }
  }

  ////Ejercicio 3
nuevaTarea = '';
  tareas: { texto: string, completada: boolean }[] = [];
  colorCompletadas = '#00ff00';

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = '';
    }
  }

  eliminarTodo() {
    this.tareas = [];
  }

  get total() {
    return this.tareas.length;
  }

  get completadas() {
    return this.tareas.filter(t => t.completada).length;
  }

  get pendientes() {
    return this.tareas.filter(t => !t.completada).length;
  }


  ////Ejercicio 4
  nombreProd = '';
  precioProd: number | null = null;
  colorProd = '#ff0000';

  productos: { nombre: string, precio: number, color: string }[] = [];
  ordenAsc = true;

  agregarProducto() {
    if (this.nombreProd.trim() !== '' && this.precioProd !== null) {
      this.productos.push({
        nombre: this.nombreProd,
        precio: this.precioProd,
        color: this.colorProd
      });
      this.nombreProd = '';
      this.precioProd = null;
    }
  }

  ordenarProductos() {
    this.productos.sort((a, b) =>
      this.ordenAsc ? a.precio - b.precio : b.precio - a.precio
    );
  }

  // 👇 Aquí movemos el reduce
  get total2() {
    return this.productos.reduce((s, p) => s + p.precio, 0);
  }

   estado = 'Finalizado';
  sonido = false;
  colorFondo = '#eeeeee';
  contador = 0;
  intervalo: any;

  iniciar() {
    this.estado = 'Iniciado';
    this.contador = 0;
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => this.contador++, 1000);
  }

  pausar() {
    this.estado = 'Pausado';
    clearInterval(this.intervalo);
  }

  finalizar() {
    this.estado = 'Finalizado';
    clearInterval(this.intervalo);
    this.contador = 0;
  }


  nombre2: string = "";
  edad2: number = 0;
  materia: string = "";

  // Resultados
  resultado: string = "";

  // Estilos iniciales
  estiloDivInicial: string = "background: lightblue; color: black; padding: 10px;";
  estiloTextoInicial: string = "color: black; font-weight: bold;";

  // Estilos dinámicos (comienzan con el valor inicial)
  estiloDiv: string = this.estiloDivInicial;
  estiloTexto: string = this.estiloTextoInicial;

  // Método para evaluar estudiante
  evaluar() {
    this.resultado = this.edad2 >= 18 
      ? "El estudiante es mayor de edad"
      : "El estudiante es menor de edad";
  }

  // Métodos para cambiar colores
  cambiarColorDiv(event: Event) {
    const nuevoColor = (event.target as HTMLInputElement).value;
    this.estiloDiv = "background: " + nuevoColor + "; color: white; padding: 10px;";
  }

  cambiarColorTexto(event: Event) {
    const nuevoColor = (event.target as HTMLInputElement).value;
    this.estiloTexto = "color: " + nuevoColor + "; font-weight: bold;";
  }

  restablecerColores() {
    this.estiloDiv = this.estiloDivInicial;
    this.estiloTexto = this.estiloTextoInicial;
  }
}





