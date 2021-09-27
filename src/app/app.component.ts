import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 displayNavbar:boolean = false;

  title = 'Devin Fonseca';
  

  selfImage:string = 'src\assets\self.jpg'

  bgImage:string = 'src\assets\bg_1.jpg'

  ngOnInit() {
    console.log("Created by Fabian Villasenor")
    console.log(`Icon courtesy of Wenjie https://thenounproject.com/wenjiejiang/`)
  }

  displayNav() {
    this.displayNavbar = !this.displayNavbar
  }
}
