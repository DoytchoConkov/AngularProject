import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';


@Component({
  selector: 'skinsunbath-new-skin',
  templateUrl: './new-skin.component.html',
  styleUrls: ['./new-skin.component.scss']
})
export class NewSkinComponent implements OnDestroy{
  killSubscription = new Subject();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contentService: ContentService,
    private router: Router
  ) {this.form = this.fb.group({
    skinDate: ['', [Validators.required]],
    skinBathDuration: ['', [Validators.required]],
    comment: [],
    skinColor: ['', [Validators.required]]
    
  }); }

  saveSkin(): void {
    if (this.form.invalid) { return; }
    this.contentService.saveSkin(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/skin']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  ngOnDestroy(): void {
    this.killSubscription.next();
    this.killSubscription.complete();
  }
}
