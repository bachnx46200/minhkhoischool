import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraloiHsComponent } from './traloi-hs.component';

describe('TraloiHsComponent', () => {
  let component: TraloiHsComponent;
  let fixture: ComponentFixture<TraloiHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraloiHsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraloiHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
