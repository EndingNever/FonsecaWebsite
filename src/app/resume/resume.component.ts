import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  pdf:any
  isLoading!:boolean
  
  constructor() { }

  ngOnInit(): void {
    const myPDF = document.getElementById("pdf")
    this.pdf = myPDF
    console.log(this.pdf.offsetHeight) 
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  checkIfLoaded() {
    // window.addEventListener("load", function(event) {
    //   console.log("All resources finished loading");
    // })
    // this.isLoading = false;
    // document.getElementById("pdf");
  }

}
