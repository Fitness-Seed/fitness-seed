import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],

})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;
  public itemColor = [];
  public iconColorVar = '';
  data: any;
  items=[
    { text:"Maria James", img: 'assets/images/Pictures/gallery-images/gallery_image1.png',dob:"November 5, 2015" },
    { text:"Jeans Stress", img: 'assets/images/Pictures/gallery-images/gallery_image2.png',dob:"November 5, 2015" },
    { text:"Emma Christian", img: 'assets/images/Pictures/gallery-images/gallery_image3.png',dob:"November 5, 2015" },
    { text:"Julia Jan", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob:"November 5, 2015" },
    ];
  constructor(
    public router: Router,
    public userData: UserData
  ) {


  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
