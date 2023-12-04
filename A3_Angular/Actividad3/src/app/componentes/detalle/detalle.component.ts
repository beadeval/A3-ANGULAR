import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { ActivatedRoute } from '@angular/router';
import { VideojuegoService } from 'src/app/videojuego.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  videojuego : Videojuego | null = null; //Creamos una variable para almacenar el videojuego y la inicializamos

  //Inyectamos dos dependencias
  constructor ( 
     private route : ActivatedRoute, //Para capturar el parámetro ID de la URL (podemos acceder por this.route)
     private videojuegoService : VideojuegoService)
  {}
   
  
  ngOnInit(): void {
    this.verDetalle()
  }

  private verDetalle(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID del videojuego de los parámetros de la URL
    this.videojuegoService.obtenerVideojuegoPorId(id); // Obtiene el videojuego por ID desde el servicio
}
}
