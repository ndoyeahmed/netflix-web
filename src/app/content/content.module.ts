import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    ContentRoutingModule,
    SharedModule,
    IvyCarouselModule

  ]
})
export class ContentModule { }
