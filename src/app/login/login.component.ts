import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;
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

  constructor() { }

  ngOnInit(): void {
  }
  onSave(){
    this.router.navigate(['/studentregistartion']);
  }
}
