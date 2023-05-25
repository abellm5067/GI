import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  typeOfFirm:string="";
  myArray: Array<any> = [{
    Id: 1,
    Name: "Values"
  },
  {
    Id: 2,
    Name: "Values"
  },
  {
    Id: 3,
    Name: "Values"
  },
  {
    Id: 4,
    Name: "Values"
  }]
  myObject: FormObject = {
    title: '',
    url: '',
    content: '',
    src: '',
    isBackground: false
  }
  constructor() {
  }
  ngOnInit(): void {

  }
  async addNew() {
    this.myArray.push({
      Id: 5,
      Name: "Values1"
    })
  }
  async onDelete(item: any) {
    let index = this.myArray.indexOf(item);
    this.myArray.splice(index, 1);
  }
  async onDeleteByIndex(i:number){
    this.myArray.splice(i, 1);
  }
  onClick(typeOfFirm:string){
this.typeOfFirm=typeOfFirm;
  }
}
export class FormObject {
  title: string = "";
  url: string = "";
  content: string = "";
  src: string = "";
  isBackground: boolean = false;

}