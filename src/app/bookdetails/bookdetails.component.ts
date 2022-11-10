import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  
  
  studentname:any;
  studentregno:any;
  bookname:any;
  bookcategory:any;
  authorname:any;
  publishdate:any;
 cols:any;
 id:any;
 data:any;





  constructor(private restApiService: RestAPIService) {
    
   }

  ngOnInit(): void {
    this.cols = [
      { field: 'studentname', header: 'studentname', align: 'left !important' },
      { field: 'studentregno', header: 'studentregno', align: 'left !important' },
      { field: 'bookname', header: 'Bookname', align: 'right !important' },
      { field: 'bookcategory', header: 'Bookcategory', align: 'left !important' },
      { field: 'authorname', header: 'Authorname', align: 'left !important' },
      { field: 'publishdate', header: 'Publishdate', align: 'left !important' },
    ]
  }
  onSave(){
    const params = {
      'sno':this.id,
      'studentname': this.studentname,
      'studentregno': this.studentregno,
      'bookname': this.bookname,
      'bookcategory': this.bookcategory,
      'authorname':this.authorname,
      'publishdate':this.publishdate,
     
     
    }
    this.restApiService.post(PathConstants.bookdetails_Post, params).subscribe(res => { })
       
  }
  onview(){
    this.restApiService.get(PathConstants.bookdetails_Get).subscribe(res => {this.data = res })
  }
  onEdit(selectedRow: {

    studentname: any;
    studentregno: any;
    bookname: any;
    bookcategory: any;
    authorname: any;
    publishdate: any;
    sno: any;
   
   } | null | undefined) {
    if(selectedRow !== null && selectedRow !==undefined){
   this.id=selectedRow.sno;
   this.studentname= selectedRow.studentname;
   this.studentregno=selectedRow.studentregno;
   this.bookname=selectedRow.bookname;
   this.bookcategory=selectedRow.bookcategory;
   this.authorname=selectedRow.authorname;
   this.publishdate=selectedRow.publishdate;
   
   }
   }
}
