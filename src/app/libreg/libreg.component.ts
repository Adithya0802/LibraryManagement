import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libreg',
  templateUrl: './libreg.component.html',
  styleUrls: ['./libreg.component.css']
})
export class LibregComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onSave(){

    this.router.navigate(['/librarien']);
  }

}
