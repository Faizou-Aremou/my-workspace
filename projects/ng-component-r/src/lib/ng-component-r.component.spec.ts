import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentRComponent } from './ng-component-r.component';

describe('NgComponentRComponent', () => {
  let component: NgComponentRComponent;
  let fixture: ComponentFixture<NgComponentRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgComponentRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
