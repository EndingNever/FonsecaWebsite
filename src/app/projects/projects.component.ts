import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  ctMap:string = "assets/CTMap.png";
  auto:string = "assets/auto.png";
  sms:string = "assets/sms.jpg";
  bridge:string = "assets/image_4.jpg";
  
  hover?:string;
  hover1 = false;
  hover2 = false;
  hover3 = false;
  hover4 = false;
  
  constructor() { }

  mouseEnter(num:number) {
    this.hover = `hover${num}`
    switch(this.hover) {
      case this.hover = 'hover1': {
        this.hover1 = true;
        break;
      }
      case this.hover = 'hover2': {
        this.hover2 = true;
        break;
      }
      case this.hover = 'hover3' : {
        this.hover3 = true;
        break; 
      }
      case this.hover = 'hover4' : {
        this.hover4 = true;
        break;
      }
    }
  }

  
  ngOnInit(): void {
  }


}