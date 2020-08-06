import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'meet-us';
  showSearchbar: boolean;
  constructor() { }

  ngOnInit() {
  }

}
