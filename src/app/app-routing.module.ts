import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'header',component: HeaderComponent},
  { path : 'studentregistration' , component : StudentregistrationComponent },
  { path : 'footer', component : FooterComponent},
  { path : 'issuebook', component : IssuebookComponent },
  { path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
