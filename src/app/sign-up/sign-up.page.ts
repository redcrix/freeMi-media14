import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private router: Router,
    
  ) { }

  ngOnInit() {
  }

  loginPage(){
    this.router.navigate(['sign-in']);
  }




signUp(){
  this.router.navigate(['sign-up-nav1']);
}

}
