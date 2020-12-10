import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoadongComponent } from './qlhoadong.component';

describe('QlhoadongComponent', () => {
  let component: QlhoadongComponent;
  let fixture: ComponentFixture<QlhoadongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlhoadongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhoadongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
