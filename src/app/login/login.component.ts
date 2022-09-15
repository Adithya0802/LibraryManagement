import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
onLogin() {
throw new Error('Method not implemented.');
}
password: any;
username: any;
cities:any;
CheckApplicaitonStatus() {
throw new Error('Method not implemented.');
}
onShowPswd() {
throw new Error('Method not implemented.');
}

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
 onSave(){
    this.router.navigate(['/studentregistration']);
  
  }
  onSubmit(){
    this.router.navigate(['/bookdetails']);
  
  }
}
