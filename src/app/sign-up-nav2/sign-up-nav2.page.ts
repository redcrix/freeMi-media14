import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-nav2',
  templateUrl: './sign-up-nav2.page.html',
  styleUrls: ['./sign-up-nav2.page.scss'],
})
export class SignUpNav2Page implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['walk-through']);
  }

}
