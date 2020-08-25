import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NutritionCategoryDto } from '../../pages/nutrition/dto/nutrition-category-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NutritionResourceService {
  options: any = {
    observe: 'response',
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }
  findAllCategories(): Observable<NutritionCategoryDto[]>  {
    const observable = this.httpClient.request('get', 'http://localhost:3000/nutrition/findAllNutritionCategories', this.options);
    const result = observable.pipe(map((res: any) => {
      return res.body as NutritionCategoryDto[];
    }));
    return result;
  }
}
