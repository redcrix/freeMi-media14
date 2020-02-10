import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-walk-through',
  templateUrl: './walk-through.page.html',
  styleUrls: ['./walk-through.page.scss'],
})
export class WalkThroughPage implements OnInit {

  constructor(  private router: Router, ) { }

  ngOnInit() {
  }

  signIn(){
    this.router.navigate(['sign-in']);
  }

  signUp(){
    this.router.navigate(['sign-up']);
  }

}
