import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  LocalStorage_: any[];

  constructor(
    private storage: Storage,
   public navCtrl: NavController,   public platform: Platform,
   private router: Router, 
  ) {

    this.router.navigate(['walk-through']);

      // Work on iOS / Android / Browser
      if (this.platform.is('ios') ) {
    
        this.storage.get('Recentv').then((res) => {
        
    
         this.LocalStorage_= res; 
    
        });}
        else{
          let VA = JSON.parse(localStorage.getItem("Recentv"));
       
    
          this.LocalStorage_= VA; 
        }

  }




}
