import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkgiaovienComponent } from './tkgiaovien.component';

describe('TkgiaovienComponent', () => {
  let component: TkgiaovienComponent;
  let fixture: ComponentFixture<TkgiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TkgiaovienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TkgiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
