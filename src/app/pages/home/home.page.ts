import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public itemColor = '';
  baseUrl = document.location.origin;
  options: any = {
    observe: 'response',
    responseType: 'text',
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) {
    this.itemColor = '#F44336';
    this.baseUrl = this.baseUrl.split(':').toString();
  }

  ngOnInit() {
    this.httpClient.request('get', 'http://localhost:3000/app/hello', this.options)
      .pipe(
        catchError(err => {
          throw 'error in source. Details: ' + err.message;
        }),
      )
      .subscribe((res:any) => {
        console.log(res.body);
      });
  }

}
