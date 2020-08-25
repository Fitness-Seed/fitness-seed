import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appreciation',
  templateUrl: './appreciation.page.html',
  styleUrls: ['./appreciation.page.scss'],
})
export class AppreciationPage implements OnInit {
  items = [
    {title: 'nice app'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
