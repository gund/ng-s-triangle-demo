/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { STriangleComponent } from './s-triangle.component';

describe('STriangleComponent', () => {
  let component: STriangleComponent;
  let fixture: ComponentFixture<STriangleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STriangleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
