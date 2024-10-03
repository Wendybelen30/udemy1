import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent  implements OnInit {

  links = [
    {subtitulo:'Development'},
    {subtitulo:'Business'},
    {subtitulo:'IT and Software'},
    {subtitulo:'Design'},
    {link: 'Python', numeritos: '36,354,994 learners'},
    {link: 'Web Development', numeritos: '11,415,615 learners'},
    {link: 'Machine Learning', numeritos: '7,070,015 learners'},
    {link: 'Financial Analysis', numeritos: '1,195,282 learners'},
    {link: 'SQL', numeritos: '5,977,561 learners'},
    {link: 'PMP', numeritos: '1,733,398 learners'},
    {link: 'Amazon AWS', numeritos: '6,123,456 learners'},
    {link: 'Ethical Hacking', numeritos: '10,931,066 learners'},
    {link: 'Cyber Security', numeritos: '3,998,037 learners'},
    {link: 'Photoshop', numeritos: '10,909,736 learners'},
    {link: 'Graphic Design', numeritos: '3,381,052 learners'},
    {link: 'Drawing', numeritos: '2,410,849 learners'},
  ];

  constructor() { }

  ngOnInit() {}

}
