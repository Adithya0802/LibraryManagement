import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onSave(){

    this.router.navigate(['/login']);

}
}