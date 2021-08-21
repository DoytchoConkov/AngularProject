import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from 'src/app/content.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
  form: FormGroup;
  nextClicked = false;
  calculatedDuration = 0;
  calculatedDays = 0;
  coefficient = 0;

  constructor(private contentService: ContentService, private fb: FormBuilder,private userService: UserService) {

    this.contentService.loadSkinCoefficient(this.userService.user?.email!).subscribe(coef => this.coefficient=coef);

    this.form = this.fb.group({
      skinColor: ['', [Validators.required]],
      skinWantedColor: ['', [Validators.required]],
      days: ['', [Validators.required]],
      dayDuration: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    if (this.nextClicked) {

    }
  }

  public calculateDailyDuration(): void {
    let { skinColor, skinWantedColor, days, dayDuration } = this.form.value
    this.calculatedDuration = Math.floor( this.coefficient*(skinWantedColor - skinColor) /days )
  }
  public calculateDays(): void {
    let { skinColor, skinWantedColor, days, dayDuration } = this.form.value
    this.calculatedDays = Math.floor( this.coefficient*(skinWantedColor - skinColor)/dayDuration )
  }

}
