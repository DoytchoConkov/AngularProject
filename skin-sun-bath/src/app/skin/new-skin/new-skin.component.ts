import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'skinsunbath-new-skin',
  templateUrl: './new-skin.component.html',
  styleUrls: ['./new-skin.component.scss']
})
export class NewSkinComponent {

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  createSkin(form: NgForm): void {
    console.log(form.value)
    if (form.invalid) { return; }
    this.contentService.saveSkin(form.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
