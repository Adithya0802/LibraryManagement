import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-libpage',
  templateUrl: './libpage.component.html',
  styleUrls: ['./libpage.component.css']
})
export class LibpageComponent implements OnInit {

  data:any;

  constructor(private router :Router ,private restApiService:RestAPIService) { }

  ngOnInit(): void {
  }

  onSave(){
    this.router.navigate(['/bookinfo']);

  }

  onView(){
    this.router.navigate(['/viewbook']);

  }

  onIssue(){
    this.router.navigate(['/issuebook']);
  }
  // onview(){
  //   this.restApiService.get(PathConstants.bookdetails_Get).subscribe(res => {this.data = res })
  // }
onStudent(){
 
}

}
