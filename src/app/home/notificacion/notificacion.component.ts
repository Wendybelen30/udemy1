import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
})
export class NotificacionComponent  implements OnInit {

  constructor() { }
  mostrarNotificacion = true;
  tiempoRestante = '¡Queda 1 día!';
  ngOnInit() {
    this.iniciarTemporizador();
  }

  iniciarTemporizador() {
    const fechaLimite = new Date('2024-09-21'); // Ajusta la fecha límite
    const tiempoActual = new Date().getTime();
    const diferencia = fechaLimite.getTime() - tiempoActual;

    if (diferencia <= 0) {
      this.tiempoRestante = '¡La oferta ha terminado!';
    } else {
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      this.tiempoRestante = `¡Queda ${dias} día${dias > 1 ? 's' : ''}!`;
    }
  }

  cerrarNotificacion() {
    this.mostrarNotificacion = false;
    document.body.style.paddingTop = '0'; // Eliminar el padding al cerrar
  }
}
