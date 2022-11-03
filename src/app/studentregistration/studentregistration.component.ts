import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  pincode: any;
  pincode_max!: number;
  Password: any;
  confirmPassword: any;
  email: any;
  commodityGroups?: any;
  checked2:boolean=true;
  value: any;
  cols: any;
  data: any[] =[];
  FirstName:any;
  LastName: any;
  date: any;
  phoneno:any;
  pincode1:any;
  address1: any;
  address2:any;
  showErrMsg: boolean | undefined;
  showMatchMsg!: boolean;

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onSave(){

    this.router.navigate(['']);



}

checkPassword() {
  if (this.Password !== undefined && this.Password !== null && this.Password.trim() !== '' &&
  this.confirmPassword !== undefined && this.confirmPassword !== null && this.confirmPassword.trim() !== '') {
        if(this.Password.trim() !== this.confirmPassword.trim()) {
          this.showErrMsg = true;
          this.showMatchMsg = false;
        } else {
          this.showErrMsg = false;
          this.showMatchMsg = true;
        }
  } else {
    this.showErrMsg = false;
  }
}


}