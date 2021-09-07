import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 displayNavbar:boolean = false;

  title = 'Devin Fonseca';
  

  selfImage:string = 'src\assets\self.jpg'

  bgImage:string = 'src\assets\bg_1.jpg'


  displayNav() {
    this.displayNavbar = !this.displayNavbar
    console.log(this.displayNavbar)
  }

  closeNav(){}
  
}
