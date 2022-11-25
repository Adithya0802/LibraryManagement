import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

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
  cities: any;
  number: any;
  data:any[]=[];

  CheckApplicationStatus() {
    throw new Error('Method not implemented.');
  }
  onShowPswd() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router,private restApiService: RestAPIService) { }


  ngOnInit(): void {
    {
      this.restApiService.get(PathConstants.studentregs_Get).subscribe(res => {this.data = res })
    }
    
  }

  onSave() {
    this.router.navigate(['/studentregistration']);

  }
  onSubmit() {
    this.data.forEach((i:any) => {
      if(
        i.regno === this.number && i.password === this.password) {
          this.router.navigate(['/bookdetails'])
        } 
        else{
          console.log('no match');
        }
      
    })
    
  }

}