import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatWeOfferRoutingModule } from './what-we-offer-routing.module';
import { WhatWeOfferComponent } from './what-we-offer.component';


@NgModule({
  declarations: [
    WhatWeOfferComponent
  ],
  imports: [
    CommonModule,
    WhatWeOfferRoutingModule
  ]
})
export class WhatWeOfferModule { }
