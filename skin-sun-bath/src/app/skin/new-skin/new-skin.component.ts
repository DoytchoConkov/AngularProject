import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import {skinDateExist } from 'src/app/shared/validators';


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
    skinDate: ['', [Validators.required, skinDateExist]],
    skinBathDuration: ['', [Validators.required]],
    comment: [],
    skinColor: ['', [Validators.required]]
    
  }); }

  saveSkin(): void {
    if (this.form.invalid) { return; }
    this.contentService.saveSkin(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
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
