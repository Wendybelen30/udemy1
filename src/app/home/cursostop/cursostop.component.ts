import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursostop',
  templateUrl: './cursostop.component.html',
  styleUrls: ['./cursostop.component.scss'],
})
export class CursostopComponent  implements OnInit {
  topCourses = [
    {
      image: 'assets/curso/2181526_b93d_8.jpg',
      title: 'Excel TOTAL en 30 Días',
      instructor: 'Federico Garay',
      rating: 4.8,
      enrollments: 23554,
      price: '179 MX$',
      bestSeller: true
    },
    {
      image: 'assets/curso/980450_7fc0_4.jpg',
      title: 'Desarrollo Web Completo',
      instructor: 'Juan Pablo De la torre Valdez',
      rating: 4.7,
      enrollments: 55220,
      price: '179 MX$',
      bestSeller: true
    }
    ,
    {
      image: 'assets/curso/2867812_4227_16.jpg',
      title: 'Universidad Python - Cero a Experto',
      instructor: 'Wendy Belén',
      rating: 4.7,
      enrollments: 55220,
      price: '179 MX$',
      bestSeller: true
    },
    {
      image: 'assets/curso/1265942_7e2f_30.jpg',
      title: 'Universidad Java - Cero a Experto ',
      instructor: 'Karmi Yajseel',
      rating: 4.7,
      enrollments: 55220,
      price: '189 MX$',
      bestSeller: true
    },
    {
      image: 'assets/curso/2645936_2526_8.jpg',
      title: 'Introducción a la Nube ',
      instructor: 'Daniel de Luis ',
      rating: 4.2,
      enrollments: 55220,
      price: '162 MX$',
      bestSeller: true
    }
   
  ];
  constructor() { }

  ngOnInit() {}

}
