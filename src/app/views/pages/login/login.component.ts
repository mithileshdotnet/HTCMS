import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formDetails!: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router : Router) { }


 ngOnInit() {
  this.formDetails = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
}
get f() { return this.formDetails.controls; }
onSubmit() {
  this.submitted = true;


  // stop here if form is invalid
  if (this.formDetails.invalid) {
      return;
  }

  this.loading = true;
 var userName=this.f['username'].value;
 var password= this.f['password'].value;

 if(userName=="Admin" && password=="123")
 {
  this.router.navigate(['/home']);
 }
 else
 {
  alert("You are not Authorize");
 }

}

}
