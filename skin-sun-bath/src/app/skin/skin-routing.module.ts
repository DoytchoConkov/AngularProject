import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewSkinComponent } from './new-skin/new-skin.component';
import { SkinsComponent } from './skins/skins.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {
    path: 'skin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SkinsComponent
      },
      {
        path: ':calculate',
        component: CalculatorComponent
      }
    ]
  },
  {
    path: 'add-skin',
    component: NewSkinComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkinsRoutingModule { }
