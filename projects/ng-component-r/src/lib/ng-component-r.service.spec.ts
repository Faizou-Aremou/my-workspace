import { TestBed } from '@angular/core/testing';

import { NgComponentRService } from './ng-component-r.service';

describe('NgComponentRService', () => {
  let service: NgComponentRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgComponentRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
