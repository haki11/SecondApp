import { Component } from '@angular/core';
import {Student} from "./student";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description = 'My Second App';
  bio:Student = 
    {sid:991000000, sname: "John Doe",
     scampus: "Davis", slogin: "doej"};

}
