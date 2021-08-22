import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  userNameAvailable(email: string) {
    return this.http.post<boolean>(`${apiURL}/isExist`, {
      email:email,
    });
  }
}
