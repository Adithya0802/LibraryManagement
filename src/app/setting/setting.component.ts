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
  cols: any;
  data: any[] = [];
  password: any;
  password1: any;
  newPassword: any;
  SpecialCharErrMsg: boolean = false;
  pswdStrongMsg: boolean = false;
  NumericErrMsg: boolean = false;
  UpperCaseErrMsg: boolean = false;
  LengthErrMsg: boolean = false;
  blockSpace: RegExp = /[^\s]/;
  id: any;
  oldPassword:any;
  logged_user: any;
  disableSave: boolean=false;

  constructor(private restApiService: RestAPIService) { }
  ngOnInit(): void {
    this.cols = [
      
      { field: 'oldPassword', header: 'Oldpassword', align: 'left !important' },
      { field: 'newPassword', header: 'Newpassword', align: 'left !important' },
      { field: 'confirmPassword', header: 'Confrimpassword', align: 'left !important' },
    ]

  }
  onSave() {
    const params = {
      'oldPassword': this.oldPassword,
      'newPassword': this.newPassword,
      'confirmPassword': this.confirmPassword,

    }
    this.restApiService.post(PathConstants.setting_Post, params).subscribe(res => { })
    this.clearForm();
  }
  onView() {
    this.restApiService.get(PathConstants.set_Get).subscribe(res => {
      this.data = res
    })
  }


  checkPassword() {
    if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
      this.password1 !== undefined && this.password1 !== null && this.password.trim() !== '') {
      if (this.newPassword.trim() !== this.confirmPassword.trim()) {
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

  check(password: any) {

    if (password.match(/[@$!%*?&]/g)) {
      this.SpecialCharErrMsg = false;
      this.disableSave=false;
    } else {
      this.SpecialCharErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave=true;
    }
    if (password.match(/[0-9]/g)) {
      this.NumericErrMsg = false;
      this.disableSave=false;
    } else {
      this.NumericErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave=true;
    }
    if (password.match(/[A-Z]/g)) {
      this.UpperCaseErrMsg = false;
      this.disableSave=false;
    } else {
      this.UpperCaseErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave=true;
    }
    if (password.length >= 8) {
      this.LengthErrMsg = false;
      this.disableSave=false;
    } else {
      this.LengthErrMsg = true;
      this.pswdStrongMsg = false;
      this.disableSave=true;
    }
    if (password.match(/[@$!%*?&]/g) && password.match(/[0-9]/g) && password.match(/[A-Z]/g) && password.length > 8)
      this.pswdStrongMsg = true;
      this.disableSave=false;
  }


  onEdit(selectedRow: {
    confirmpassword: any;
    newpassword: any;
    oldpassword: any;
    

    sno: any; firstname: any;

  } | null | undefined) {

    if (selectedRow !== null && selectedRow !== undefined) {

      this.id = selectedRow.sno;
      this.oldpassword = selectedRow.oldpassword;
      this.newpassword = selectedRow.newpassword;
      this.confirmpassword = selectedRow.confirmpassword;

    }
  }
  clearForm() {

    this.oldPassword = null;
    this.newPassword=null;
    this.confirmPassword=null;
   }
   
   }
   



