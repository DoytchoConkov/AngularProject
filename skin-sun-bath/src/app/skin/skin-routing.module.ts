import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { NewSkinComponent } from './new-skin/new-skin.component';
import { SkinsComponent } from './skins/skins.component';
import { SkinComponent } from './skin/skin.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  // {
    // path: 'skins',
    // children: [
      {
        path: '',
        pathMatch: 'full',
        component: SkinsComponent, canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        }
      },
      {
        path: 'calculate',
        component: CalculatorComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        }
      },

      {
        path: 'add-skin',
        component: NewSkinComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        }
      },
      {
        path: ':skinId',
        component: SkinComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        }
      }
    ]
  // }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkinsRoutingModule { }
