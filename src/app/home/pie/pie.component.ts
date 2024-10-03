import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent  implements OnInit {

  links = [
    { subtitulo: 'Udemy Business' },
    { subtitulo: 'Enseña en Udemy' },
    { subtitulo: 'Consigue la aplicación' },
    { subtitulo: '¿Quiénes somos?' },
    { subtitulo: 'Ponte en contacto con nosotros' },
    { subtitulo: 'Empleo' },
    { subtitulo: 'Blog' },
    { subtitulo: 'Ayuda y asistencia' },
    { subtitulo: 'Afiliado' },
    { subtitulo: 'Inversores' },
    { subtitulo: 'Condiciones' },
    { subtitulo: 'Política de privacidad' },
    { subtitulo: 'Configuración de cookies' },
    { subtitulo: 'Mapa del sitio' },
    { subtitulo: 'Declaración de accesibilidad' }
  ];
  

  constructor() { }

  ngOnInit() {}

}
