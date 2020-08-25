import { NutritionResourceService } from './nutrition-resource.service';
import { Injectable } from '@angular/core';
import { NutritionCategoryDto } from '../../pages/nutrition/dto/nutrition-category-dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(
    private nutritionResourceService: NutritionResourceService
  ) { }
  findAllCategories(): Observable<NutritionCategoryDto[]> {
    const nutritionCategories = this.nutritionResourceService.findAllCategories().pipe(map(res => {
    return res;
    }));
    return nutritionCategories;
  }
}
