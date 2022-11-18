import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {
  bookid: any;
  bookname: any;
  studentregno: any;
  issueinfo: any;
  borrowdate: any;
  issuedate: any;
  externdate: any;
  data: any;
  id: any;
  cols: any;
  issuebook: any;

  value: any;
  constructor(private restApiService: RestAPIService) {

  }

  ngOnInit(): void {
    this.onview();
    this.cols = [

      { field: 'bookid', header: 'BookId', align: 'left !important' },
      { field: 'bookname', header: 'BookName', align: 'left !important' },
      { field: 'studentregno', header: 'StudentRegno', align: 'right !important' },
      { field: 'issueinfo', header: 'Issueinfo', align: 'left !important' },
      { field: 'borrowdate', header: 'Borrowdate', align: 'left !important' },
      { field: 'issueinfo', header: 'Issuedate', align: 'left !important' },
      { field: 'externdate', header: 'Externdate', align: 'left !important' },
    ]

  }

  onSave() {
    const params = {
      'sno': this.id,
      'bookid': this.bookid,
      'bookname': this.bookname,
      'studentregno': this.studentregno,
      'issueinfo': this.issueinfo,
      'borrowdate': this.borrowdate,
      'issuedate': this.issuedate,
      'externdate': this.externdate,

    }
    this.restApiService.post(PathConstants.bookissues_Post, params).subscribe(res => { })
    console.log("**", this.issueinfo);

  }
  onview() {
    this.restApiService.get(PathConstants.bookissues_Get).subscribe(res => { this.data = res })
  }
  onEdit(selectedRow: {
    externdate: any;
    issuedate: any;
    studentregno: any;
    borrowdate: any;
    bookname: any;
    bookid: any;
    sno: any;

  } | null | undefined) {
    if (selectedRow !== null && selectedRow !== undefined) {
      this.id = selectedRow.sno;
      this.bookid = selectedRow.bookid;
      this.bookname = selectedRow.bookname;
      this.studentregno = selectedRow.studentregno;
      this.borrowdate = selectedRow.borrowdate;
      this.issuedate = selectedRow.issuedate;
      this.externdate = selectedRow.externdate;
    }
  }

  onclear() {
    this.bookid = null;
    this.bookname = null;
    this.studentregno = null;
    this.borrowdate = null;
    this.issuedate = null;
    this.externdate = null;
  }
  onApprove(rowData: any,value:any) {
    if (value === 0) {
      ///decline
      this.data.forEach((i:any) => {
        if (i.sno === rowData.sno)
          i.approvalstatus = 1; // confirm to decline
        
      })
    }else {
      ///absent
      this.data.forEach((i:any) => {
        if (i.sno === rowData.sno)
          i.approvalstatus = 0; // decline to confirm
      })
    }


    //update
    const params = {
      'sno': rowData.sno,
      'approvalstatus': rowData.approvalstatus
    }
    this.restApiService.post(PathConstants.updatebookissues_Post, params).subscribe(res => {
      if (res) {
      }
      else {
      }
    })
  }
  
      
  
}
