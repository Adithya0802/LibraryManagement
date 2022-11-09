import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { ConfirmationService } from 'primeng/api';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MenubarModule } from 'primeng/menubar';
import { BookstatusComponent } from './bookstatus/bookstatus.component';
import { LibpageComponent } from './libpage/libpage.component';




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
    LibregComponent,
    BookinfoComponent,
    BookstatusComponent,
    LibpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    HttpClientModule,
    SidebarModule,
    PanelMenuModule,
    PanelModule,
    TabViewModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MenubarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
