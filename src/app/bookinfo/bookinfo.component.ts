import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {
  title: any;
  author: any;
  id: any;
  list: any;
  subject: any;
  book: any;
  producer: any;
  published: any;
  publisher: any;
  booktitle: any;
  page: any;
  copies: any;
  shelf: any;
  name: any;
  data: any[] = [];
  cols: any;
  date: any;
  selectedCountry: any;
  selectedCity3:any;
     countries: any[] = [];
  groupCities: SelectItemGroup[];
  constructor(private restapiservice: RestAPIService) {
    this.groupCities = [
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
    this.onView();
    this.cols = [
      { field: 'subject', header: 'Subject', align: 'left !important' },
      { field: 'title', header: 'Title', align: 'left !important' },
      { field: 'author', header: 'Author', align: 'right !important' },
      { field: 'name', header: 'Name', align: 'left !important' },
      { field: 'date', header: 'Date', align: 'left !important' },
      { field: 'copies', header: 'Copies', align: 'left !important' },
      { field: 'shelf', header: 'Shelf', align: 'left !important' },
    ]
  }
  onSubmit() {
    const params = {
      'sno': this.id,
      'subject': this.subject,
      'title': this.title,
      'author': this.author,
      'name': this.name,
      'date': this.date,
      'copies': this.copies,
      'shelf': this.shelf,
    };
    this.restapiservice.post(PathConstants.bookinfo_Post, params).subscribe(res => { })
  }
  onView() {
    this.restapiservice.get(PathConstants.bookinfo_Get).subscribe(res => {this.data = res })
this.onclear();
  }
  onEdit(selectedRow: {
    date: any;
    copies: any;
    name: any;
    author: any;
    shelf: any;
    title: any;
    subject: any;
    sno: any;
  } | null | undefined) {

    if (selectedRow !== null && selectedRow !== undefined) {

      this.subject = selectedRow.subject;
      this.title = selectedRow.title;
      this.author = selectedRow.author;
      this.name = selectedRow.name;
      this.date = selectedRow.date;
      this.copies = selectedRow.copies;
      this.shelf = selectedRow.shelf;
    }
  }
  onclear(){
    this.subject=null;
    this.title=null;
    this.author=null;
    this.author=null;
    this.name=null;
    this.date=null;
    this.copies=null;
    this.shelf=null;
  }
}




