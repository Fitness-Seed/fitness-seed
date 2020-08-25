/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewImageComponent } from './new-image.component';

describe('NewImageComponent', () => {
  let component: NewImageComponent;
  let fixture: ComponentFixture<NewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
