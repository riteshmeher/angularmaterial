import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private http: HttpClient) { }

  login = () => {
    this.http.post('https://hapi-typescript.herokuapp.com/api/users/login', {
      'email': this.email,
      'password': this.password
    }).subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      }
    })
  }
}
