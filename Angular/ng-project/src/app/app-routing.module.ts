import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CreateformComponent } from './form/createform/createform.component';
import { HomeComponent } from './home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'post',component:PostComponent},
  {path:'form',component:CreateformComponent},
  {path:'whoweare',component:WhoWeAreComponent},
  { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule) },
  { path: 'whatweoffer', loadChildren: () => import('./what-we-offer/what-we-offer.module').then(m => m.WhatWeOfferModule) },
  { path: 'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule) },
  { path: 'contactus', loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
