import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanhoiHsComponent } from './phanhoi-hs.component';

describe('PhanhoiHsComponent', () => {
  let component: PhanhoiHsComponent;
  let fixture: ComponentFixture<PhanhoiHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanhoiHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanhoiHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
