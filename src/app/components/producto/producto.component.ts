import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() product:Product={
    id:'',
    title:'',
    image:'',
    price:0,
    description:'',
  }
@Output() addedProduct=new EventEmitter <Product>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(){
  this.addedProduct.emit(this.product);
  }

}
