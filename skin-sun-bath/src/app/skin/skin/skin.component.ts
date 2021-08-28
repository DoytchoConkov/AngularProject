import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { ISkin } from 'src/app/shared/interfaces/skin';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.scss']
})
export class SkinComponent {

  skin: ISkin | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchSkin();
  }

  fetchSkin(): void {
    this.skin = undefined;
    const id = this.activatedRoute.snapshot.params.skinId;
    this.contentService.loadSkin(id).subscribe(skin => this.skin = skin);
  }
}
