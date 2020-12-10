import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlylophocComponent } from './qlylophoc.component';

describe('QlylophocComponent', () => {
  let component: QlylophocComponent;
  let fixture: ComponentFixture<QlylophocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlylophocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QlylophocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
