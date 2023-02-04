import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'list_of_childhood_friends';
  menu = {
    about: 'About US',
    gallery: 'Gallery',
    contact: 'Contact Us',
  };
}
