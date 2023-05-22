import { TestBed } from '@angular/core/testing';

import { NgxAirDatepickerService } from './ngx-air-datepicker.service';

describe('NgxAirDatepickerService', () => {
  let service: NgxAirDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAirDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
