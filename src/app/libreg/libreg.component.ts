import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libreg',
  templateUrl: './libreg.component.html',
  styleUrls: ['./libreg.component.css']
})
export class LibregComponent implements OnInit {
emailid:any;

Password: any;
 confirmPassword: any;
 email: any;
 showTable!: boolean;
 commodityGroups?: any;
 checked2:boolean=true;
 value: any;
 cols: any;
 data: any[] =[];
 date: any;
 phoneno:any;
 country?:any;
 states?:any;
 pincode1:any;
 address1: any;
 address2:any;
 productionHouse:any;
 showErrMsg !: boolean;
 showMatchMsg!: boolean;
 countryArr:any;
 stateArr:any;
 SpecialCharErrMsg: boolean=false;
 pswdStrongMsg: boolean=false;
 NumericErrMsg: boolean=false;
 UpperCaseErrMsg: boolean=false;
 LengthErrMsg: boolean=false;
 password: any;
 password1: any;
 newPassword: any;
 name:any;



  constructor(private router :Router) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name', align: 'left !important' },
      { field: 'emailid', header: 'EmailId', align: 'left !important' },
      { field: 'email', header: 'email', align: 'right !important' },
      { field: 'password', header: 'Password', align: 'left !important' },
      { field: 'confirmpassword', header: 'Confirmpassword', align: 'left !important' },
     
]

  }

  onSave(){

    this.router.navigate(['/bookinfo']);
  }
  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
    this.password1 !== undefined && this.password1 !== null && this.password.trim() !== '') {
          if(this.newPassword.trim() !== this.confirmPassword.trim()) {
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

  check(password:any) {

     if (password.match(/[@$!%*?&]/g)) {
     this.SpecialCharErrMsg = false;
     } else {
     this.SpecialCharErrMsg = true;
     this.pswdStrongMsg = false;
    }    
   if (password.match(/[0-9]/g)) {   
     this.NumericErrMsg = false;
    } else {    
    this.NumericErrMsg = true;    
    this.pswdStrongMsg = false;    
    }    
    if (password.match(/[A-Z]/g)) {    
    this.UpperCaseErrMsg = false;    
    } else {    
    this.UpperCaseErrMsg = true;    
    this.pswdStrongMsg = false;    
    }    
    if (password.length >= 8) {    
    this.LengthErrMsg = false;    
    } else {    
    this.LengthErrMsg = true;    
    this.pswdStrongMsg = false;
    }
    if (password.match(/[@$!%*?&]/g) && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.length > 8)
    this.pswdStrongMsg = true;
   }


  }




  
