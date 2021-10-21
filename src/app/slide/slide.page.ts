import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {


  ngOnInit() {
  }

  public constructor(private router:Router){}

  navigate(){
   this.router.navigate(['/home']);
  }
 }
 

