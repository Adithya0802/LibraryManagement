import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagement';
  hidemenu:boolean=true;

  constructor(private router:Router){
 this.router.events.subscribe((events)=> {
  if(events instanceof NavigationEnd){
    if(events.url ==='/') {
      this.hidemenu=false;
    }
    else{
      this.hidemenu=true
    }
  }
})
  }
}

