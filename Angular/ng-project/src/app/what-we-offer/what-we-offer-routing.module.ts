import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatWeOfferComponent } from './what-we-offer.component';

const routes: Routes = [{ path: '', component: WhatWeOfferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatWeOfferRoutingModule { }
