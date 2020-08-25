/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoResourceService } from './video-resource.service';

describe('Service: VideoResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoResourceService]
    });
  });

  it('should ...', inject([VideoResourceService], (service: VideoResourceService) => {
    expect(service).toBeTruthy();
  }));
});
