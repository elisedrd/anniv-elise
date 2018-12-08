import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPadlockComponent } from './num-padlock.component';

describe('NumPadlockComponent', () => {
  let component: NumPadlockComponent;
  let fixture: ComponentFixture<NumPadlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumPadlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumPadlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
