import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../../../services/authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  validInputEmail = false;
  validInputEmpty = false;
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {

    if(this.credentials.email && this.credentials.password && this.credentials.first_name && this.credentials.last_name) {
      
      this.validInputEmpty = false;

      this.auth.register(this.credentials).subscribe(result => {
      
        if(result['error'] === 'User already exists') {
          this.validInputEmail = true;
  
        } else {
          this.validInputEmail = false;
          this.router.navigateByUrl('/profile')
        }
         
      }, error => {
        console.log('error is ', error);
      });
      
    }else{
      this.validInputEmpty = true;
    }


  }
}