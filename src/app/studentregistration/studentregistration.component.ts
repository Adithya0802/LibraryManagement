import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  
  pincode: any;

  pincode_max: any;
  id:any=0;
  
  Password: any;
  confirmpassword: any;
  fathername:any;
  regno:any;
  emailid: any;
  course:any;
  department:any;
  collegename:any;
  commodityGroups?: any;
  checked2:boolean=true;
  value: any;
  cols: any;
  data: any[] =[];
  firstname:any;
  lastname:any;
  dataofbirth: any = Date;
  phoneno:any;
  pincode1:any;
  address: any;
  age:any;
  gender:any;
  showErrMsg: boolean | undefined;
  showMatchMsg!: boolean;
  SpecialCharErrMsg:any;
  password:any;
  password1:any;
  newPassword:any;
  pswdStrongMsg:any;
  NumericErrMsg:any;
  UpperCaseErrMsg:any;
  LengthErrMsg:any;
  disableSave:boolean=false;
  disableemail: boolean=false;
  Specialemailerr: boolean |undefined;
  validatePassword: boolean=false;
  
  constructor(private restApiService: RestAPIService) { 

  }

  ngOnInit(): void {
    this.cols = [
      { field: 'firstname', header: 'Firstname', align: 'left !important' },
      { field: 'lastname', header: 'Lastname', align: 'left !important' },
      { field: 'regno', header: 'Regno', align: 'right !important' },
      { field: 'fathername', header: 'Fathername', align: 'left !important' },
      { field: 'gender', header: 'Gender', align: 'left !important' },
      { field: 'dataofbirth', header: 'Dataofbirth', align: 'left !important' },
      { field: 'age', header: 'Age', align: 'left !important' },
      { field: 'address', header: 'Address', align: 'left !important' },
      { field: 'pincode', header: 'Pincode', align: 'left !important' },
      { field: 'collegename', header: 'Collegename', align: 'left !important' },
      { field: 'course', header: 'Course', align: 'left !important' },
      { field: 'department', header: 'Department', align: 'left !important' },
      { field: 'emailid', header: 'Emailid', align: 'left !important' },
      { field: 'password', header: 'Password', align: 'left !important' },
      { field: 'confirmpassword', header: 'Confirmpassword', align: 'left !important' },
]
  }
  
  onSave(){  
    console.log("++",this.regno);
    const params = {    'sno':this.id,
    'firstname':this.firstname,
    'lastname':this.lastname,
    'regno':this.regno,
    'fathername':this.fathername,
    'dataofbirth':this.dataofbirth,
    'age':this.age,
    'gender':this.gender,
    'address':this.address,
    'pincode':this.pincode,
    'collegename':this.collegename,
    'course':this.course,
    'department':this.department,
    'emailid':this.emailid,
    'password':this.password,
    'confirmpassword':this.confirmpassword,
}
console.log(this.regno);
this.data.forEach((i:any) => {
  if(
    i.regno !== this.regno ) {
      
    } 
    else{
      console.log(null);
    }
  
})
this.restApiService.post(PathConstants.studentregs_Post, params).subscribe(res => { })
// this.data.forEach((j:any) => {
//   if(
//     j.regno !== this.regno) {
     
//     } 
//     else{
//       console.log(null);
//     }
  
// })
  }
  onview(){
    this.restApiService.get(PathConstants.studentregs_Get).subscribe(res => {this.data = res })
  }
  
  onEdit(selectedRow: {
  
   sno: any;
   firstname:any;
   lastname:any;
   confirmpassword: any;
   fathername:any;
   regno:any;
   emailid: any;
   course:any;
   department:any;
   collegename:any;
   password:any;
   gender:any;
   address:any;
   pincode:any;
   dataofbirth:any;
   age:any;
   
  } | null | undefined) {
   if(selectedRow !== null && selectedRow !==undefined){
  this.id=selectedRow.sno;
  this.firstname= selectedRow.firstname;
  this.lastname=selectedRow.lastname;
  this.regno=selectedRow.regno;
  this.fathername=selectedRow.fathername;
  this.gender=selectedRow.gender;
  this.address=selectedRow.address;
  this.dataofbirth=selectedRow.dataofbirth;
  this.age=selectedRow.age;
  this.pincode=selectedRow.pincode;
  this.collegename=selectedRow.collegename;
  this.course=selectedRow.course;
  this.department=selectedRow.department;
  this.emailid=selectedRow.emailid;
  this.password=selectedRow.password;
  this.confirmpassword=selectedRow.confirmpassword;
  }
  }
checkPassword() {
  if (this.password !== undefined && this.password !== null && this.password.trim() !== '' &&
  this.password !== undefined && this.password !== null && this.password.trim() !== '') {
        if(this.confirmpassword.trim() !== this.confirmpassword.trim()) {
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

check(confirmpassword:any) {

   if (confirmpassword.match(/[@$!%*?&]/g)) {
   this.SpecialCharErrMsg = false;
   this.validatePassword=true;

   } else {
   this.SpecialCharErrMsg = true;
   this.pswdStrongMsg = false;
  this.validatePassword=false;
  }    
 if (confirmpassword.match(/[0-9]/g)) {   
   this.NumericErrMsg = false;
  this.validatePassword=true;
  } else {    
  this.NumericErrMsg = true;    
  this.pswdStrongMsg = false;  
  this.validatePassword=false;
  }    
  if (confirmpassword.match(/[A-Z]/g)) {    
  this.UpperCaseErrMsg = false;   
  this.validatePassword=true;
  } else {    
  this.UpperCaseErrMsg = true;    
  this.pswdStrongMsg = false;    
  this.validatePassword=false;

  }    
  if (confirmpassword.length >= 8) {    
  this.LengthErrMsg = false;    
  this.validatePassword=true;
  } else {    
  this.LengthErrMsg = true;    
  this.pswdStrongMsg = false;
  this.validatePassword=false;
  }
  if (confirmpassword.match(/[@$!%*?&]/g) && confirmpassword.match(/[0-9]/g) && confirmpassword.match(/[A-Z]/g) && confirmpassword.length > 8)
  this.pswdStrongMsg = true;
  
 }

 checkemail()
 {
  if (this.emailid.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    this.Specialemailerr = false;
    this.disableemail=true;
    } else {
    this.Specialemailerr = true;
   
    this.disableemail=true;
   }    
 }
public CalculateAge(): void
{

if(this.dataofbirth)
 {
        var timeDiff = Math.abs(Date.now() - this.dataofbirth.getTime());
        console.log('1',timeDiff)
        var a = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        this.age=a;
 console.log("hjdh",this.dataofbirth.getTime());
        console.log("age",a);
  
  }
}
}