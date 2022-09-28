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



  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onSave(){

    this.router.navigate(['/librarien']);
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
