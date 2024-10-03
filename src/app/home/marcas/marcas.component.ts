import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss'],
})
export class MarcasComponent  implements OnInit {
  logos: string[] = [
    'assets/iconos_empresas/volkswagen_logo.svg',
    'assets/iconos_empresas/samsung_logo.svg',
    'assets/iconos_empresas/cisco_logo.svg',
    'assets/iconos_empresas/vimeo_logo_resized-2.svg',
    'assets/iconos_empresas/procter_gamble_logo.svg',
    'assets/iconos_empresas/hewlett_packard_enterprise_logo.svg',
    'assets/iconos_empresas/citi_logo.svg',
    'assets/iconos_empresas/ericsson_logo.svg'
  ];
  constructor() { }

  ngOnInit() {}

}

