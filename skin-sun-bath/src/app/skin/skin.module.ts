import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSkinComponent } from './new-skin/new-skin.component';
import { SkinsRoutingModule } from './skin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SkinsComponent } from './skins/skins.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewSkinComponent,
    SkinsComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkinsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SkinModule { }
