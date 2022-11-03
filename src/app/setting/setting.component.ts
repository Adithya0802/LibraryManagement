import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  mobileNumber: any;
  Password: any;
  confirmPassword: any;
  email: any;
  showTable!: boolean;
  checked2: boolean = true;
  showErrMsg !: boolean;
  showMatchMsg!: boolean;
  firstname: any;
  lastname: any;
  phoneno: any;
  oldpassword: any;
  newpassword: any;
  confirmpassword: any;
  cols :any;
  data: any[]=[];
  password: any;
  password1: any;
  newPassword: any;
  SpecialCharErrMsg: boolean=false;
  pswdStrongMsg: boolean=false;
  NumericErrMsg: boolean=false;
  UpperCaseErrMsg: boolean=false;
  LengthErrMsg: boolean=false;
  blockspace: RegExp = /[^\s]/;
  id: any;

  constructor(private restApiService: RestAPIService) { }
  ngOnInit(): void {
    this.cols = [
      { field: 'firstName', header: 'FirstName', align: 'left !important' },
      { field: 'lastName', header: 'LastName', align: 'left !important' },
      { field: 'email', header: 'email', align: 'right !important' },
      { field: 'phoneno', header: 'phoneno', align: 'left !important' },
      { field: 'oldpassword', header: 'oldpassword', align: 'left !important' },
      { field: 'newpassword', header: 'newpassword', align: 'left !important' },
      { field: 'confirmpassword', header: 'confrimpassword', align: 'left !important' },
]

  }
  onSave() {
    const params = {
      'firstname': this.firstname,
      'lastname': this.lastname,
      'email': this.email,
      'phoneno': this.phoneno,
      'oldpassword': this.oldpassword,
      'newpassword': this.Password,
      'confirmpassword': this.confirmPassword,
    }
    this.restApiService.post(PathConstants.setting_Post, params).subscribe(res => { })
  }
  onView(){
    this.restApiService.get(PathConstants.set_Get).subscribe(res =>{this.data = res
    })
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


   onEdit(selectedRow: {
     confirmpassword: any;
     newpassword: any;
     oldpassword: any;
     phoneno: any;
     email: any;
     lastname: any;

    sno: any; firstname: any;

} | null | undefined) {

    if(selectedRow !== null && selectedRow !==undefined){
this.id=selectedRow.sno;
this.firstname= selectedRow.firstname;
this.lastname= selectedRow.lastname;
this.email= selectedRow.email;
this.phoneno= selectedRow.phoneno;
this.oldpassword= selectedRow.oldpassword;
this.newpassword=selectedRow.newpassword;
this.confirmpassword=selectedRow.confirmpassword;

    }
 }
}


