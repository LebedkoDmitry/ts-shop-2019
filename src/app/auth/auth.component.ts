import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.authService.auth(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(response => {
      console.log(response);
      this.router.navigate(['']);
    }, error => {
      console.error(error);
    });
  }

}
