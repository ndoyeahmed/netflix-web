import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
