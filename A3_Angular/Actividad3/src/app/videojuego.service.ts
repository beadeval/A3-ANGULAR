import { Injectable } from '@angular/core';
import { Videojuego } from './entidades/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private listaVideojuegos : Videojuego  [] = [ //Creamos la lista de Videojuegos
   new Videojuego('Mario Bross', 'Nintendo', 'Mario', 'Excelente'),
   new Videojuego('Animal Crossing','Nintendo','Tom', 'Bueno')
  ];

  constructor() { }

  obtenerVideojuegos(): Videojuego[] { //Método del service de Videojuego que devuelve una lista de objetos previamente
    return this.listaVideojuegos;      //almacenada
  }

  obtenerVideojuegoPorId(id: number): Videojuego | undefined { //Buscamos y devolvemos un Videojuego
    return this.listaVideojuegos.find(videojuego => videojuego.id === id);
  }
}
