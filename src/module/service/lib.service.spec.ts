import { TestBed, inject } from '@angular/core/testing';

import { NgxValidate } from './ngx-validate.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxValidate]
    });
  });

  it('should create service', inject([NgxValidate], (service: NgxValidate) => {
    expect(service).toBeTruthy();
  }));

  it('should say hello to stranger', inject([NgxValidate], (service: NgxValidate) => {
    expect(service.sayHello()).toBe('Hello Stanger!');
  }));

 it('should say hello to provided user', inject([NgxValidate], (service: NgxValidate) => {
    expect(service.sayHello('ng-hacker')).toBe('Hello ng-hacker!');
  }));
});
