import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
  form: FormGroup;
  nextClicked = false;
  constructor(private fb: FormBuilder,) {
    this.form=this.fb.group({
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
console.log(this.form)
  }
  public calculateDays(): void {
    console.log(this.form)
  }

}
