import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'header',component: HeaderComponent},
  { path : 'studentregistration' , component : StudentregistrationComponent },
  { path : 'footer', component : FooterComponent},
  { path : 'bookdetails', component : BookdetailsComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'settings' , component : SettingComponent},
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
