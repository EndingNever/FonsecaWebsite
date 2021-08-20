import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devin Fonseca';

  selfImage:string = 'src\assets\self.jpg'

  bgImage:string = 'src\assets\bg_1.jpg'
}
