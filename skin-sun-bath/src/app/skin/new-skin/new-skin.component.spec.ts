import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkinComponent } from './new-skin.component';

describe('NewSkinComponent', () => {
  let component: NewSkinComponent;
  let fixture: ComponentFixture<NewSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
