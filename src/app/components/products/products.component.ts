import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product [] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/toy.jpg',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://raw.githubusercontent.com/platzi/angular-fundamentals/10-step/src/assets/images/glasses.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
