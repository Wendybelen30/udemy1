import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursoscat',
  templateUrl: './cursoscat.component.html',
  styleUrls: ['./cursoscat.component.scss'],
})
export class CursosCatComponent  implements OnInit {

  courses = [
    {
      image: 'assets/curso/2297910_788e_2.jpg',
      title: 'Python Practicando',
      instructor: 'Alvaro Chirou',
      rating: 4.6,
      enrollments: 21423,
      price: '179 MX$'
    },
    {
      image: 'assets/curso/2867812_4227_16.jpg',
      title: 'Universidad Python',
      instructor: 'Ubaldo Acosta',
      rating: 4.7,
      enrollments: 16841,
      price: '179 MX$'
    }
    ,
    {
      image: 'assets/curso/3809174_9a5b_2.jpg',
      title: 'Universidad Python',
      instructor: 'Ubaldo Acosta',
      rating: 4.7,
      enrollments: 16841,
      price: '179 MX$'
    }
    ,
    {
      image: 'assets/curso/3586896_04a0_18.jpg',
      title: 'Universidad Python',
      instructor: 'Ubaldo Acosta',
      rating: 4.7,
      enrollments: 16841,
      price: '179 MX$'
    }
    ,
    {
      image: 'assets/curso/3655814_50f2_20.jpg',
      title: 'Universidad Python',
      instructor: 'Ubaldo Acosta',
      rating: 4.7,
      enrollments: 16841,
      price: '179 MX$'
    }

    // Agrega más cursos aquí
  ];
  constructor() { }

  ngOnInit() {}

}

