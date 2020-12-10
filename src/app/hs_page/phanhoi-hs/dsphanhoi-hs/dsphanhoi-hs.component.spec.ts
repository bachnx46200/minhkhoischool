import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsphanhoiHsComponent } from './dsphanhoi-hs.component';

describe('DsphanhoiHsComponent', () => {
  let component: DsphanhoiHsComponent;
  let fixture: ComponentFixture<DsphanhoiHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsphanhoiHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsphanhoiHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
