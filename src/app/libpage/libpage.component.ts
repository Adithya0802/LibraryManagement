import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libpage',
  templateUrl: './libpage.component.html',
  styleUrls: ['./libpage.component.css']
})
export class LibpageComponent implements OnInit {
  

  constructor(private router :Router) { }

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

onStudent(){
 
}

}
