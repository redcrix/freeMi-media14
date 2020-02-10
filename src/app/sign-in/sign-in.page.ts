import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit() {
  }

  login(){

    this.router.navigate(['sign-up-nav1']);
    
  }

  signUp(){
    this.router.navigate(['sign-up']);
  }

}
