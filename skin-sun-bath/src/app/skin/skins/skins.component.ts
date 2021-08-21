import { Component } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import {  Skin } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-skin',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  skins: Skin[] | undefined;
  recentSkins: Skin[] | undefined;

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) {
    this.fetchSkins();
  }

  fetchSkins(): void {
    this.skins = undefined;
    this.contentService.loadSkins(this.userService.user?.email!).subscribe(skins => this.skins = skins);
  }
}
