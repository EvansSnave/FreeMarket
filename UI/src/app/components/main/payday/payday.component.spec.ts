/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaydayComponent } from './payday.component';

describe('PaydayComponent', () => {
  let component: PaydayComponent;
  let fixture: ComponentFixture<PaydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
