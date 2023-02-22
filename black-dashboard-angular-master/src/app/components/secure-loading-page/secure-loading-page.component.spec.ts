import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureLoadingPageComponent } from './secure-loading-page.component';

describe('SecureLoadingPageComponent', () => {
  let component: SecureLoadingPageComponent;
  let fixture: ComponentFixture<SecureLoadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureLoadingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
