import { Component, OnInit } from '@angular/core';
import { CardDetails, SharedService } from '../shared.service';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent implements OnInit {
  cardInfo:CardDetails[]=[];
  constructor(private _sharedService:SharedService) {
    
  }
ngOnInit(): void {
  this._sharedService.getWhereWeare().subscribe(x=>{
    this.cardInfo=x
  });
}
}
