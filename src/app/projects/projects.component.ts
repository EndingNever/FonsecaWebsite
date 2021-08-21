import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  ctMap:string = "assets/CTMap.png"
  constructor() { }

  ngOnInit(): void {
  }

}
