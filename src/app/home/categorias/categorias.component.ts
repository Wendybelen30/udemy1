import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {

  categorias = [
    { id: 1, nombre: 'Diseño', img: 'assets/imagenes/diseñocat.jpg', ruta: '' }, // Ruta no creada
    { id: 2, nombre: 'Desarrollo', img: 'assets/imagenes/desarrollocat.jpg', ruta: '' }, // Ruta no creada
    { id: 3, nombre: 'Marketing', img: 'assets/imagenes/marketingcat.jpg', ruta: '' }, // Ruta no creada
    { id: 4, nombre: 'Informática y software', img: 'assets/imagenes/iscat.jpg', ruta: '' },
    { id: 5, nombre: 'Desarrollo personal', img: 'assets/imagenes/dpersonal.jpg', ruta: '' }, // Ruta no creada
    { id: 5, nombre: 'Negocios', img: 'assets/imagenes/negocioscat.jpg', ruta: '' }, // Ruta no creada
    { id: 7, nombre: 'Fotografía', img: 'assets/imagenes/fotografiacat.jpg', ruta: '' }, // Ruta no creada
    { id: 8, nombre: 'Música', img: 'assets/imagenes/musicacat.jpg', ruta: '' }, // Ruta no creada
  ];

  constructor() { }

  ngOnInit() {}

}
