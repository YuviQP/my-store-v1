import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() img:string='';
  @Output() loaded=new EventEmitter <string> ();
  imgDefault:string='../../../assets/mario.jpg';
  counter=0;
  constructor() {
    //before render
    //no correr async--once time is created
    console.log('constructor','imgValue=>',this.img);
  }
  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //actualiza el input
    //change inputs--many times
    console.log('constructor','imgValue=>',this.img);
  }
  ngOnInit(): void {
    console.log('ngOnInit','imgValue=>',this.img);
    window.setInterval(()=>{this.counter+=1
    console.log('run counter');
    },1000)
  }
  imgError(){
  this.img=this.imgDefault;
  }
  imgLoaded(){
    console.log('loaded');
    this.loaded.emit(this.img);
  }

}
