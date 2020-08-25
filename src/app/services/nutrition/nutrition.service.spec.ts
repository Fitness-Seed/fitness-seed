/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NutritionService } from './nutrition.service';

describe('Service: Nutrition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionService]
    });
  });

  it('should ...', inject([NutritionService], (service: NutritionService) => {
    expect(service).toBeTruthy();
  }));
});
