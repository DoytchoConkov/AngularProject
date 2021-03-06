import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueEmail implements AsyncValidator {
  constructor(private authService: AuthService) {}
  
    validate = (control: FormControl) => {
    const { value } = control;
    return this.authService.userNameAvailable(value).pipe(
   
      map(() => {
        return null;
      }),
      catchError((err) => {
        console.log(err.error);
    
        if (err.error==value) {
  
           return of({ nonUniqueEmail: true });
        }
        return of({ noConnection: true });
      })
    );
  };
}