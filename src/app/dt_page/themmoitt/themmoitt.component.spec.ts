import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemmoittComponent } from './themmoitt.component';

describe('ThemmoittComponent', () => {
  let component: ThemmoittComponent;
  let fixture: ComponentFixture<ThemmoittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemmoittComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemmoittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
