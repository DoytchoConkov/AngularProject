import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSkinComponent } from './new-skin/new-skin.component';
import { SkinsRoutingModule } from './skin-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { SkinsComponent } from './skins/skins.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    NewSkinComponent,
    SkinsComponent,
    AsideComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SkinsRoutingModule
  ]
})
export class SkinModule { }
