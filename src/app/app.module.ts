import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { IssuebookComponent } from './issuebook/issuebook.component';
import { HomeComponent } from './home/home.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { ForgetComponent } from './forget/forget.component';
import { LibrarienComponent } from './librarien/librarien.component';
import { StatusComponent } from './status/status.component';
import { LibregComponent } from './libreg/libreg.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StudentregistrationComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    IssuebookComponent,
    HomeComponent,
    BookdetailsComponent,
    DashboardComponent,
    SettingComponent,
    ForgetComponent,
    LibrarienComponent,
    StatusComponent,
    LibregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
