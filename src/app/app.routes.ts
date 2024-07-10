import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SecondPageComponent} from "./second-page/second-page.component";
import {FirstPageComponent} from "./first-page/first-page.component";

export const routes: Routes = [

  { path: '', component: FirstPageComponent, pathMatch: 'full' },
  { path: 'second-page', component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
