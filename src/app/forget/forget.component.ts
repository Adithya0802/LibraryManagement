import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  email: any;
 confirmpassword:any;
  newpassword:any;
  cols: any;

  data: any[] = [];
  id: any;

  constructor(private restapiservice: RestAPIService) { }
  ngOnInit(): void {
    this.cols = [
   { field: 'email', header: 'Email', align: 'left !important' },
   { field: 'confirmpassword', header: 'confirmpassword', align: 'left !important'},
   { field: 'newpassword', header: 'newpassword', align: 'left !important'}
    ]
  }
  
  onShow() {
    const params = {
      'sno': this.id,
      'email': this.email,
      'confirmpassword':this.confirmpassword,
      'newpassword':this.newpassword,
     };
    this.restapiservice.post(PathConstants.forget_Post, params).subscribe(res => { })
    
  }
  onView(){
    this.restapiservice.get(PathConstants.forget_Get).subscribe(res =>{ this.data = res})
  }
  onEdit(selectedRow: {

    sno: any; email: any;

} | null | undefined) {

    if(selectedRow !== null && selectedRow !==undefined){
this.id=selectedRow.sno;
this.email= selectedRow.email;
 }
 }
}


