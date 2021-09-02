import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Devin Fonseca';
  

  selfImage:string = 'src\assets\self.jpg'

  bgImage:string = 'src\assets\bg_1.jpg'


  
}
