import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})

export class CalculatorComponent {
  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService
  ) { }

  calculateDuration(): void {

  }

}
