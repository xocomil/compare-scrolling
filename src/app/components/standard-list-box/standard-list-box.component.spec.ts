import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardListBoxComponent } from './standard-list-box.component';

describe('StandardListBoxComponent', () => {
  let component: StandardListBoxComponent;
  let fixture: ComponentFixture<StandardListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardListBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
