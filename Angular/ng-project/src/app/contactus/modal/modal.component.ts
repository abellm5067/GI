import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isVisible: boolean = false;
  userDetails:IUserInfo={
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    dob: new Date(),
    comments: ''
  };
  ngOnInit(): void {
    
  }
  save(value:any,valid:any){
console.log(value);
  }
  showModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
  }
}
export interface IUserInfo{
  email:string,
  firstName:string,
  lastName:string,
  phone:string,
  dob?:Date,
  comments:string
}