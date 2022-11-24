import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  title:any;
  firstname:string="home";
  secondname:string="home2";

  constructor() { }

  ngOnInit(): void {
  }

}
