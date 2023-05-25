import { Component, OnInit } from '@angular/core';
import { CardDetails, SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardInfo:CardDetails[]=[];
  constructor(private _sharedService:SharedService){

  }
  ngOnInit(): void {
    this._sharedService.getHomeCardInfo().subscribe(x=>{
      this.cardInfo=x
    });
  }

}
