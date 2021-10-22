import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.page.html',
  styleUrls: ['./calories.page.scss'],
})
export class CaloriesPage implements OnInit {

  name: string;
  minutes: number;
  gender: string;
  calories: number;
  message:string

  public constructor(private router:Router){}

  ngOnInit() {
  }

  calculateCalories(){
    if (this.gender=="M"){
      this.calories= this.minutes*17.43;
      this.gender="Male";
      this.message = "You lost: "+ this.calories +" Cal for " + this.minutes + "min";
    }else{
      this.calories= this.minutes*15.106;
      this.gender="Female";
      this.message = "You lost: "+ this.calories +" Cal for " + this.minutes + "min";   
    }
  }

  Reset(){
    window.location.reload();
  }
 
}
