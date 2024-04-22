/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewArrivalsComponent } from './new-arrivals.component';

describe('NewArrivalsComponent', () => {
  let component: NewArrivalsComponent;
  let fixture: ComponentFixture<NewArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
