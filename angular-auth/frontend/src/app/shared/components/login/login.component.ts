import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../../../services/authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  validInput = false;
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    if(this.credentials.email && this.credentials.password) {
      
      this.auth.login(this.credentials).subscribe(result => {
      
        if(result['error'] === 'User does not exist') {
          this.validInput = true;      
        } else {
          this.validInput = false;   
          this.router.navigateByUrl('/profile')
        }
         
      }, error => {
        console.log('error is ', error);
      });
    }
  }
}