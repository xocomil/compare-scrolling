import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularScrollerComponent } from './rx-angular-scroller.component';

describe('RxAngularScrollerComponent', () => {
  let component: RxAngularScrollerComponent;
  let fixture: ComponentFixture<RxAngularScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxAngularScrollerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxAngularScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
