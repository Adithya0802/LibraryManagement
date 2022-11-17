import { Component, OnInit } from '@angular/core';
import { PathConstants } from '../CommonModules/pathcontants';
import { RestAPIService } from '../restapi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  test:any;
  test1:any;
  
  constructor(private restApiService: RestAPIService) { }

  ngOnInit(): void {
    this.restApiService.get(PathConstants.studentcount_Get).subscribe(res => 
      {
        this.data = res[0].nos;
      })

  this.restApiService.get(PathConstants.Bookcount_Get).subscribe(res => 
    {
      this.test=res[0].nob;
      
    })

  this.restApiService.get(PathConstants.bookoutcount_Get).subscribe(res =>
    {
      this.test1=res[0].noo
    })
  }

}
