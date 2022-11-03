import { Component, OnInit } from '@angular/core';
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

  constructor(private restapiservice: RestAPIService) { }


  ngOnInit(): void {
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

      'title': this.title,
      'author': this.author,
      'id': this.id,
      'list': this.list,
      'subject': this.subject,
      'book': this.book,
      'producer': this.producer,
      'publisher': this.publisher,
      'booktitle': this.booktitle,
      'page': this.page,
      'copies': this.copies,
      'shelf': this.shelf,
      'publishedName': this.name,
      'PublisedDate': this.date,

    }
    this.restapiservice.post(PathConstants.bookinfo_Post, params).subscribe(res => {

    })



  }
  onView() {
    this.restapiservice.get(PathConstants.book_Get).subscribe(res => {



    })

  }

}

