import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KqcuoinamComponent } from './kqcuoinam.component';

describe('KqcuoinamComponent', () => {
  let component: KqcuoinamComponent;
  let fixture: ComponentFixture<KqcuoinamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KqcuoinamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KqcuoinamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
