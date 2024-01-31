import { TestBed, inject } from '@angular/core/testing';

import { CaptchaService } from './captcha.service';

describe('CaptchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaptchaService]
    });
  });

  it('should be created', inject([CaptchaService], (service: CaptchaService) => {
    expect(service).toBeTruthy();
  }));
});
