import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective,
    ShortenPipe
  ]
})
export class SharedModule { }