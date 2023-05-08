import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBars = faBars;
  check = true;
  width = "0px";
  opensideNav() {
    if (this.check === true) {
      this.width = "250px"
      this.check = false;
    } else {
      this.width = "0px"
      this.check = true;
    }
  }

  //  data :{id:number, src:string}[]=[
  //   { "id":0, "src":"hjgf.jpg"},
  //   { "id":1, "src":"hjgf.jpg"},
  //   { "id":2, "src":"hjgf.jpg"}
  // ];

  // players: [
  //   {
  //     name: 'Christian Wood',
  //     number: 35,
  //     position: 'C',
  //     height: 82,
  //     weight: 214,
  //   },
  //   {
  //     name: 'Kevin Porter Jr.',
  //     number: 3,
  //     position: 'SG',
  //     height: 76,
  //     weight: 203,
  //   },
  // ]
  print: String = "";
  getData(val: string) {
    console.warn(val);
    this.print = val;
  }

  fun() {
    console.warn("mouse is hovered")
  }

  val = 0;
  IncreaseD(v: String) {
    v === "D" ? this.val-- : this.val++;
  }

  show: boolean = false;
  change() {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false
    }
  }

  users = ["durgesh", "krishna", "Ranjeet", "name"];

  color = "white";
  bgColor = "green"
  updatecolor(){
    this.color = "white";
    this.bgColor = "black"
  }
}
