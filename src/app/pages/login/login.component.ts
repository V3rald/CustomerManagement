import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FbContactsService } from 'src/app/services/fb-contacts.service';
import { SharedService } from 'src/app/services/shared.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  });
  alertMessage = '';
  alertsList: any = {
    user: () => "Hibás Email vagy jelszó!",
    server: () => "A szolgáltatás nem elérhető!",
    false: () => ''
  };

  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService, private service: FbContactsService) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.form.invalid) return;

    this.authService.login(this.form.value.email, this.form.value.password).then(
      result=>{
        this.sharedService.EMAIL = this.form.value.email;
        
        let sharedService = this.sharedService;
        let router = this.router;
        this.service.get(this.form.value.email).then(function(result: any) {
          if(!result) return;
          sharedService.NAME = result.name;
          router.navigateByUrl('/home');
        });
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
        ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }

}
