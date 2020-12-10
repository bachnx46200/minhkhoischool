import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlytaikhoanComponent } from './qlytaikhoan.component';

describe('QlytaikhoanComponent', () => {
  let component: QlytaikhoanComponent;
  let fixture: ComponentFixture<QlytaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlytaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlytaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
