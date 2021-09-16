import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthServiceService } from 'src/app/addressBookService/user-auth-service.service';
@Component({
  selector: 'app-person-login',
  templateUrl: './person-login.component.html',
  styleUrls: ['./person-login.component.css']
})
export class PersonLoginComponent implements OnInit {
  
  formGroup!: FormGroup;
  constructor(private authService: UserAuthServiceService ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    console.log("email",this.formGroup.value, this.formGroup.valid);
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result =>{
        localStorage.setItem("jwtToken", result.jwt);
        console.log(" person ", result.jwt)
      }
      )
    }
  }
}
