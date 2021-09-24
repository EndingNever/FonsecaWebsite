import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdf:any
  isLoading!:boolean
  
  constructor() { }

  ngOnInit(): void {
    const myPDF = document.getElementById("pdf")
    this.pdf = myPDF
    // console.log(this.pdf.offsetHeight) 
  }

  ngAfterViewInit(): void {
  }


}
