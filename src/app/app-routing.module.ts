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
import { LibregComponent } from './libreg/libreg.component';
import { ForgetComponent } from './forget/forget.component';
import { LibrarienComponent } from './librarien/librarien.component';
import { StatusComponent } from './status/status.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { LibpageComponent } from './libpage/libpage.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  { path: 'header',component: HeaderComponent},
  { path : 'studentregistration' , component : StudentregistrationComponent },
  { path : 'footer', component : FooterComponent},
  { path : 'issuebook', component : IssuebookComponent },
  { path : 'home', component : HomeComponent},
  { path : 'bookdetails', component : BookdetailsComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path: '',redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'libreg', component : LibregComponent},
  { path : 'forget' , component : ForgetComponent},
  { path : 'librarien' , component : LibrarienComponent},
  { path : 'status' , component : StatusComponent},
  { path : 'bookinfo',component : BookinfoComponent},
  { path : 'libpage',component : LibpageComponent},
  { path : 'bookstatus',component: BookdetailsComponent},
  { path : 'viewbook',component:ViewbookComponent },
  { path : 'setting', component:SettingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
