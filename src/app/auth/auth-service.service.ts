import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token!: string;

  constructor(private http: HttpClient) { }

  signup(userusername: string, userpassword: string)
  {
    this.http.post('https://localhost:3000/api/users/signup',{username: userusername, password: userpassword})
    .subscribe(response => {
      alert ("Account Created Successfully")
    });
  }

  login(userusername: string, userpassword: string)
  {
    this.http.post < {token: string} > ('https://localhost:3000/api/users/login', {username: userusername, password: userpassword})
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      alert("Welcome Back")
    })
  }

  gettoken()
  {
    return this.token;
  }

}
