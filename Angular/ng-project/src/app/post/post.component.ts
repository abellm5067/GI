import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string ="";
  message: string = "get values";
  Isred: boolean = true;
  userName:string="";
  @Output() msgEvent = new EventEmitter<string>();
  imageUrl: string = 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
  /**
   *
   */
  constructor() {
  }
  ngOnInit(): void {

  }
  OnClick() {
    this.msgEvent.emit("Message Changed");
    this.Isred = true;
  }
  OnKeyUp($event:any,username:any){
    console.log($event.target.value);
    console.log(username.value);
    console.log(this.userName);
  }
}
