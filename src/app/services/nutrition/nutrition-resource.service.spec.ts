/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NutritionResourceService } from './nutrition-resource.service';

describe('Service: NutritionResource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionResourceService]
    });
  });

  it('should ...', inject([NutritionResourceService], (service: NutritionResourceService) => {
    expect(service).toBeTruthy();
  }));
});
