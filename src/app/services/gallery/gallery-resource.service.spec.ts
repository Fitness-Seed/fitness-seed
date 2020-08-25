/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GalleryResourceService } from './gallery-resource.service';

describe('Service: ResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryResourceService]
    });
  });

  it('should ...', inject([GalleryResourceService], (service: GalleryResourceService) => {
    expect(service).toBeTruthy();
  }));
});
