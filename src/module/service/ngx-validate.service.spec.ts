import {TestBed, inject} from '@angular/core/testing';

import {NgxValidate} from './ngx-validate.service';

describe('NgxValidate Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxValidate]
    });
  });

  it('should create service', inject([NgxValidate], (service: NgxValidate) => {
    expect(service).toBeTruthy();
  }));

});
