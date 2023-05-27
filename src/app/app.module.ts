import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from './shared/components/blockui/blockui-template.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
      message: 'Chargement en cours....'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
