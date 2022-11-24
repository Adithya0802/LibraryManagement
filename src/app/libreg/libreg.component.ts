import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';



@Component({
  selector: 'app-libreg',
  templateUrl: './libreg.component.html',
  styleUrls: ['./libreg.component.css']
})
export class LibregComponent implements OnInit {

 confirmPassword: any;
 email: any;
 showTable!: boolean;
 commodityGroups?: any;
 checked2:boolean=true;
 value: any;
 pro='selvam'
 id:any;
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
 repeatpassword: any;
 private _libreg: any;
 confirmpassword:any;
 disableSave: boolean=false;
 validatePassword: boolean = false;


  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
  
    this.cols = [
      { field: 'name', header: 'Name', align: 'left !important' },
      { field: 'email', header: 'email', align: 'left !important' },
      { field: 'password', header: 'Password', align: 'left !important' },
      { field: 'repeatpassword', header: 'Repeatpassword', align: 'left !important' },

    ]

  }

  onSave() {
    console.log("==",this.email)
    const params = {
      'name': this.name,
      'email': this.email,
      'password': this.password,
      'repeatpassword': this.repeatpassword,
    };
    this.restApiService.post(PathConstants.LibReg_Post, params).subscribe(res => { })
    
    this.clearForm();

    
  }
  onView(){
    this.restApiService.get(PathConstants.Libreg_Get).subscribe(res =>{
      this.data = res
    })
  }
  
  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
    this.repeatpassword !== undefined && this.repeatpassword !== null && this.repeatpassword.trim() !== '') {
          if(this.password.trim() !== this.repeatpassword.trim()) {
            this.showErrMsg = true;
            this.showMatchMsg = false;
            this.disableSave=false;
          } else {
            this.showErrMsg = false;
            this.showMatchMsg = true;
            this.disableSave=true;

          }
    } else {
      this.showErrMsg = false;
    }
  }

  check(repeatpassword: any) {

     if (repeatpassword.match(/[@$!%*?&]/g)) {
     this.SpecialCharErrMsg = false;
     this.validatePassword=true;

     } else {
     this.SpecialCharErrMsg = true;
     this.pswdStrongMsg = false;
     this.validatePassword=false;
    }    
   if (repeatpassword.match(/[0-9]/g)) {   
     this.NumericErrMsg = false;
     this.validatePassword=true;
    } else {    
    this.NumericErrMsg = true;    
    this.pswdStrongMsg = false;  
    this.validatePassword=false;

    }    
    if (repeatpassword.match(/[A-Z]/g)) {    
    this.UpperCaseErrMsg = false;  
    this.validatePassword=true;  
    } else {    
    this.UpperCaseErrMsg = true;    
    this.pswdStrongMsg = false;  
    this.validatePassword=false;  
    }    
    if (repeatpassword.length >= 8) {    
    this.LengthErrMsg = false;   
    this.validatePassword=true; 
    } else {    
    this.LengthErrMsg = true;    
    this.pswdStrongMsg = false;
    this.validatePassword=false;
    }
    if (repeatpassword.match(/[@$!%*?&]/g) && repeatpassword.match(/[0-9]/g) && repeatpassword.match(/[A-Z]/g) && repeatpassword.length > 8)
    this.pswdStrongMsg = true;
    // this.validatePassword=false;
   }
  onEdit(selectedRow: {
    email: any;
    name: any;
    password: any;
    repeatpassword: any;
    sno: any;
  } | null | undefined) {

    if (selectedRow !== null && selectedRow !== undefined) {

      this.id = selectedRow.sno;
      this.name = selectedRow.name;
      this.email = selectedRow.email;
      this.password = selectedRow.password;
      this.repeatpassword = selectedRow.repeatpassword;
    }
  }
clearForm() {


 this.password=null;
 this.repeatpassword=null;
}
}
 