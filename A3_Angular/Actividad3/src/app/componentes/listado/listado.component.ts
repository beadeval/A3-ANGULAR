import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegoService } from 'src/app/videojuego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  listaVideojuegos : Videojuego [] = []; //Creamos un array vacío
    
  constructor(private router : Router, private videojuegoService: VideojuegoService) { //Constructor qye inyecta VideojuegoService, que permite
                                                              //acceder a los métodos y datos
    this.listaVideojuegos = this.videojuegoService.obtenerVideojuegos();
  }

  verDetalle(videojuego: Videojuego): void {
    this.router.navigate(['/detalle', videojuego.id]); // Navega a la ruta 'detalle/:id'
  }                                                             
}

