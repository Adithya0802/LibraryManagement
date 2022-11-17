import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';


@Component({
  selector: 'app-librarien',
  templateUrl: './librarien.component.html',
  styleUrls: ['./librarien.component.css']
})
export class LibrarienComponent implements OnInit {
  email: any;
  password: any;
  data: any[] = [];
  
  constructor(private restApiService: RestAPIService, private router: Router,private _messegaeService:MessageService,) { }
  ngOnInit(): void {
    this.restApiService.get(PathConstants.Libreg_Get).subscribe(res => {
      this.data = res;
    })
  }
  onLogin() {
    this.data.forEach((i: any) => {
      if (
        i.email === this.email && i.password === this.password) {
          this.router.navigate(['/libpage'])
      } else {
        console.log('no match')

      }
      
    })
  }
}
