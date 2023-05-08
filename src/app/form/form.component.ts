import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  enterdata: any = {}
  getAllData(data: NgForm) {
    this.enterdata = data;
  }
  display = true;
  toggle() {
    this.display = !this.display
  }

  arr:any[] =[];
  addinputs(data:String){
    this.arr.push({id:this.arr.length, text:data})
  }
  
  remobve(id:number){
      this.arr = this.arr.filter(item=>item.id !== id)
  }
}
