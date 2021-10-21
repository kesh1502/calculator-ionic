import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public constructor(private router:Router){}

 calculator(){
  this.router.navigate(['/calculator']);
 }

 BMI(){
  this.router.navigate(['/bmi']);
 }

 converter(){
  this.router.navigate(['/calculator']);
 }

 about(){
  this.router.navigate(['/calculator']);
 }
}
