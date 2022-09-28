import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarien',
  templateUrl: './librarien.component.html',
  styleUrls: ['./librarien.component.css']
})
export class LibrarienComponent implements OnInit {
  username: any;
  password: any;


  constructor(private router :Router) { }

  ngOnInit(): void {
  }
onSave(){
 // this.router.navigate(['/status']);

 const params={
'username':this.username,
'password':this.password, 

 }
}
}
