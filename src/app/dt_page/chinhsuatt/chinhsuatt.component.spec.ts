import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhsuattComponent } from './chinhsuatt.component';

describe('ChinhsuattComponent', () => {
  let component: ChinhsuattComponent;
  let fixture: ComponentFixture<ChinhsuattComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinhsuattComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhsuattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
