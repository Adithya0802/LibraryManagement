import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
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
 selectedCountry: any;
 selectedCity3:any;
    countries: any[] = [];
//item:any[]=[];
    groupedCities: SelectItemGroup[];
  constructor(private restApiService: RestAPIService) {
  //  this. item = [
  //   {label:'tea',value:'1'},{label:'coffee',value:'2'},{label:'avs',value:'3'},{label:'ggc',value:'4'}
  // ];
    this.groupedCities = [
      {
          label: 'Tamil', value: 'TA',
          items: [
              {label: 'Ponninselvan', value: 'PS'},
              {label: 'Ramayanam', value: 'RS'},
              {label: 'Udaiyar', value: 'UR'},
              {label: 'Sirithu velichaham', value: 'SV'}
          ]
      },
      {
          label: 'English', value: 'EN',
          items: [
              {label: 'Jane Eyre', value: 'JE'},
              {label: 'The Great Gatsby', value: 'GG'},
              {label: 'Brave New World', value: 'BN'},
              {label: 'Ulysses', value: 'US'}
          ]
      },
      {
          label: 'Science', value: 'SC',
          items: [
              {label: 'Globalwarming', value: 'GW'},
              {label: 'Enivornmentscience', value: 'ES'},
              {label: 'The origin of species', value: 'OS'},
              {label: 'Growth&forms', value: 'GS'}
          ]
      },
      {
        label: 'SocialScience', value: 'SC',
        items: [
            {label: 'Breaking India', value: 'BI'},
            {label: 'The India Day', value: 'ID'},
            {label: 'SouthvsNorth', value: 'SN'},
            {label: 'castes of India', value: 'CI'}
        ]
    },
    {
      label: 'StoryBook', value: 'SB',
      items: [
          {label: 'Wings of fire', value: 'WF'},
          {label: 'The Growth tree', value: 'GT'},
          {label: 'Harry potter', value: 'HP'},
          {label: 'Life will be change one day', value: 'LD'}
      ]
  },
  ];
    
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
