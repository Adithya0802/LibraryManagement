import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { HomeComponent } from './home/home.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ForgetComponent } from './forget/forget.component';
import { LibrarienComponent } from './librarien/librarien.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'header',component: HeaderComponent},
  { path : 'studentregistration' , component : StudentregistrationComponent },
  { path : 'footer', component : FooterComponent},
  { path : 'issuebook', component : IssuebookComponent },
  { path : 'home', component : HomeComponent},
  { path : 'bookdetails', component : BookdetailsComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'settings' , component : SettingComponent},
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'forget' , component : ForgetComponent},
  { path : 'librarien' , component : LibrarienComponent},
  { path : 'status' , component : StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
