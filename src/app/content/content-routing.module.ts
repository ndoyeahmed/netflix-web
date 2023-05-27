import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "../shared/services/auth.guard";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ContentRoutingModule {}
