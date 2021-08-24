import { DevinServiceService } from './../devin-service.service';
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
        console.log(`hover = hover1, hover1 = ` + this.hover1);
        break;
      }
      case this.hover = 'hover2': {
        this.hover2 = true;
        console.log(`hover = hover2, hover2 = ` + this.hover2);
        break;
      }
      case this.hover = 'hover3' : {
        this.hover3 = true;
        console.log(`hover = hover3, hover3 = ` + this.hover3);
        break; 
      }
      case this.hover = 'hover4' : {
        this.hover4 = true;
        console.log(`hover = hover4, hover4 = ` + this.hover4);
        break;
      }
    }
  }

  mouseLeave(num:number) {
    // switch(this.hover) {
    //   case this.hover = 'hover1': {
    //     this.hover1 = false;
    //     console.log(`hover = hover1, hover1 = ` + this.hover1);
    //     break;
    //   }
    //   case this.hover = 'hover2': {
    //     this.hover2 = false;
    //     console.log(`hover = hover2, hover2 = ` + this.hover2);
    //     break;
    //   }
    //   case this.hover = 'hover3' : {
    //     this.hover3 = false;
    //     console.log(`hover = hover3, hover3 = ` + this.hover3);
    //     break; 
    //   }
    //   case this.hover = 'hover4' : {
    //     this.hover4 = false;
    //     console.log(`hover = hover4, hover4 = ` + this.hover4);
    //     break;
    //   }
    // }
  }
  
  ngOnInit(): void {
  }


}