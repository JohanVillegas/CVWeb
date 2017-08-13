import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css'],
})
export class AboutComponent {
 aboutme = ABOUTME;
 position = PROFILE; 
}


export class About {
  id: number;
  name: string;
  description: string;
  class:string;
}

 const ABOUTME: About[] = [
    { id:1, name: "Nombre"          ,description: "Johan Villegas"                      ,class: "fa fa-user" },
    { id:2, name: "Email"           ,description: "JohanVillegas.mj@hotmail.com"        ,class: "fa fa-envelope" },
    { id:3, name: "Telefono"        ,description: "+1 809-672-3962"                     ,class: "fa fa-volume-control-phone" },
    { id:4, name: "Fecha Nacimiento",description: "25/03/1991"                          ,class: "fa fa-calendar" },
    { id:5, name: "Direccion"       ,description: "Santo Domingo, Republica Dominicana" ,class: "fa fa-map-marker" },
    { id:6, name: "Nacionalidad"    ,description: "Venezolana"                          ,class: "fa fa-flag" }
  ];

  const PROFILE: About[] =[
    { id:7, name: "Posicion"        ,description: "Ingeriero de Software"               ,class: "none" },
    { id:8, name: "Resumen"         ,description: "Tengo más de 4 años de experiencia en el campo de desarrollo en sistemas de captación de datos y control de procesos en el área administrativa y de producción, involucrado en la planificación, ejecución y control de los procesos tecnológicos en el área de desarrollos de aplicaciones Web y Móvil, además con conocimientos solidos en gestión de base de datos e inteligencia de negocio (BI), aplicada a la creación y administración de análisis de datos masivo, desarrollando estrategias y ejecutando herramientas de alto rendimiento.", class:"none"},
    { id:9, name: "Resumen"         ,description: " Mis objetivos son aumentar mis conocimientos en los campos de la informática y las nuevas tecnologías, especialmente, el desarrollo web e inteligencia de negocio. Siempre con ganas de aprender nuevas tecnologías y ser parte de un enorme cambio en el mundo.", class:"none"}
  ]; 


