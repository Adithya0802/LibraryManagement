import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { StudentregistrationComponent } from './studentregistration/studentregistration.component';

const routes: Routes = [
  { path : 'studentregistration' , component : StudentregistrationComponent },
  { path : 'footer', component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
