import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    if(this.form.invalid) return;

    this.authService.register(this.form.value.email, this.form.value.name, this.form.value.password).then(
      result=>{
        this.sharedService.EMAIL = this.form.value.email;
        this.sharedService.NAME = this.form.value.name;

        this.router.navigateByUrl('/home');
      }
    );
  }

}
