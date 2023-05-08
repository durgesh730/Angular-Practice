import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  users:any
  constructor(
    private userData: UserDataService){
      this.userData.users().subscribe((data)=>{
        this.users = data;
       
      })
  }

  second = "durgesh";
  setfunction() {
    return "function"
  }
  setSum() {
    return 2 + 5;
  }
  data = 10;
  updateVal() {
    this.data = Math.random()
  }

  date = Date()
}

