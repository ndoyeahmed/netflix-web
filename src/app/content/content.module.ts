import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../shared/components/blockui/blockui-template.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    ContentRoutingModule,
    SharedModule,
    IvyCarouselModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
      message: 'Chargement en cours....'
    })
  ]
})
export class ContentModule { }
