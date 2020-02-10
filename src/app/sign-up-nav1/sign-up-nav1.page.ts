import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-nav1',
  templateUrl: './sign-up-nav1.page.html',
  styleUrls: ['./sign-up-nav1.page.scss'],
})
export class SignUpNav1Page implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  FreeUp(){
    this.router.navigate(['sign-up-nav2']);
  }

 

}
