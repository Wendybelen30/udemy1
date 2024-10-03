import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LinksComponent } from './links/links.component';
import { PromosComponent } from './promos/promos.component';
import { PieComponent } from './pie/pie.component';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CursosCatComponent } from './cursoscat/cursoscat.component';
import { CursostopComponent } from './cursostop/cursostop.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { MarcasComponent } from './marcas/marcas.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,CabezaComponent,CategoriasComponent,LinksComponent,PromosComponent,
    PieComponent,IniciarsesionComponent,RegistrateComponent,BienvenidaComponent,
    CursostopComponent,NotificacionComponent,CursosCatComponent,MarcasComponent
  ]
})
export class HomePageModule {}
