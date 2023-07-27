import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFieldComponent } from './double-field.component';

describe('DoubleFieldComponent', () => {
  let component: DoubleFieldComponent;
  let fixture: ComponentFixture<DoubleFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleFieldComponent]
    });
    fixture = TestBed.createComponent(DoubleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
