import { Component, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-project';
  message:any ="";
  bool:boolean=true;
  @ViewChild(PostComponent) childComp: any;
isActive: any;
  ngAfterViewInit(): void {
    console.log(this.childComp);
    Promise.resolve().then(()=>this.message=this.childComp?.message);
  }
  messageEvt(value: any) {
    this.message = value;
  }
}
