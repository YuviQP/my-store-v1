import { Component, OnInit ,Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() product:Product={
    id:'',
    name:'',
    image:'',
    price:0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
