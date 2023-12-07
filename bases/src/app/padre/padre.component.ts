import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})

export class PadreComponent implements OnInit{
  
  nombre?: string ;
  fecha: Date = new Date();
  dolar: number = 35.70;
  // constructor(
  //   private _servicioFamiliar: ServicioFamiliarService
  // ){}

  private _servicioFamiliar = inject(ServicioFamiliarService)

ngOnInit(): void {
  this._servicioFamiliar.setHermanoGrande('luciana');
  this.nombre = this._servicioFamiliar.getHermanoGrande();
}

saludar(){ 
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || "")
}

preguntar(){
  console.log(`${this._servicioFamiliar.getHermanoPequeno()}, ${this._servicioFamiliar.preguntarPorHijo()} `)
}

  mensajePadre: string = 'Mensaje desde el padre';
}
