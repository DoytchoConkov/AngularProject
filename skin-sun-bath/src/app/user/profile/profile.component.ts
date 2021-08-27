import { Component } from '@angular/core';
import { NgForm, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ContentService } from 'src/app/core/services/content.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'softuni-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  coefficient = 0;
  isLoading = true;
  nextClicked = false;

  get user() {
    return this.userService.user;
  }

  constructor(private contentService: ContentService, private fb: FormBuilder, private userService: UserService,private router: Router) {
    // this.contentService.loadSkinCoefficient(this.userService.user?.email!).subscribe(coefficient => this.coefficient = +coefficient.toFixed(2));
    this.userService.getProfileInfo().pipe(map((user)=>{
      this.contentService.loadSkinCoefficient(this.userService.user?.email!).subscribe(coefficient => this.coefficient = +coefficient.toFixed(2))})).subscribe();
  }

  updateProfile(_form: NgForm): void {
   
  }

  public updateUsername(form: NgForm): void { 
    if (form.invalid) { return; }
    this.userService.updateProfile({ username: form.value.username, email: this.user!.email }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  public clearSkins(): void {
    this.userService.clearSkins({ email: this.user!.email }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
