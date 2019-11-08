import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoList';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDZR_kutmJgBz8rV5Bsl21IQGHHOd8oPe4",
      authDomain: "todolist-2ba04.firebaseapp.com",
      databaseURL: "https://todolist-2ba04.firebaseio.com",
      projectId: "todolist-2ba04",
      storageBucket: "todolist-2ba04.appspot.com",
      messagingSenderId: "127415440809",
      appId: "1:127415440809:web:6af24e58e29820b8a8a0b8"
    };

    firebase.initializeApp(firebaseConfig);
  }

}
