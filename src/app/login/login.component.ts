import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  openMenu: boolean = false;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const apiUrl = 'https://dummyjson.com/auth/login';

      const requestBody = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          alert('Authentication Successful');
          console.log('Authentication Successful:', data);
          if (data) {
            this.openMenu = true;
            this.loginForm.reset();
          }
        })
        .catch((error) => {
          alert('Authentication Failed');
          this.loginForm.reset();
          console.error('Authentication Failed:', error);
        });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
