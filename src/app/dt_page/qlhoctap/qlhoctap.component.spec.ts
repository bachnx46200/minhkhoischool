import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoctapComponent } from './qlhoctap.component';

describe('QlhoctapComponent', () => {
  let component: QlhoctapComponent;
  let fixture: ComponentFixture<QlhoctapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlhoctapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoctapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
