import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-person-login',
  templateUrl: './person-login.component.html',
  styleUrls: ['./person-login.component.css']
})
export class PersonLoginComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl();
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
    
  }
  
  onSubmit(){
    console.log("hii")
    console.log("email",this.email.value, this.password.value)
  }

}
