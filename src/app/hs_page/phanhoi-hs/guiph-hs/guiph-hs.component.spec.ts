import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiphHsComponent } from './guiph-hs.component';

describe('GuiphHsComponent', () => {
  let component: GuiphHsComponent;
  let fixture: ComponentFixture<GuiphHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiphHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiphHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
