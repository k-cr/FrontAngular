import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUser!: LoginUser;
  username!: string;
  password!: string;
  roles: string[] = [];
  errMsj: string = '';
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
        if(this.username == 'kcr' && this.password == 'kcr'){
          this.router.navigate(['/home'])
          this.authService.setAdmin(true)
        } else if (this.username == 'user' && this.password == 'user'){
          this.router.navigate(['/home'])
          this.authService.setAdmin(false)
        }
        else {
          window.location.reload();
      }
  }

  irHome(page: string) {
    this.router.navigate([`${page}`]);
  }
}

export class SimpleoFormComp {
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
