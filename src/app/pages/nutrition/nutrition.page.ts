import { NutritionCategoryDto } from './dto/nutrition-category-dto';
import { NutritionService } from './../../services/nutrition/nutrition.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  isLoading = false;
  nutritionCategories: NutritionCategoryDto[] = [];
  items = [
    {id: 1, title: 'Diets', description: `While many diets may work for you, the key is finding one you like and can stick to in the long run.
    Here are 5 healthy diets that are scientifically proven to be effective.`},
    {id: 2, title: 'Body Types', description: `Do you have trouble losing body fat, yet seem to gain it after even the smallest slip up with your diet? Or 
    does it feel like you can eat for days without gaining an ounce?
    It could have something to do with your current body type.`},
    {id: 3, title: 'Eating Plans', description: `A healthy eating plan also will lower your risk for heart disease and
     other health conditions. A healthy eating plan: Emphasizes vegetables, fruits, whole grains, 
    and fat-free or low-fat dairy products. Includes lean meats, poultry, fish, beans, eggs, and nuts.`},
    {id: 4, title: 'Types Of Foods', description: `This is a categorically-organized list of foods. Food is any substance[1] 
    consumed to provide nutritional support for the body. It is produced either by Plants or Animals, 
	and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals`},
    {id: 5, title: 'Fasting', description: `Intermittent fasting has recently become a health trend. It’s claimed to cause weight loss, improve metabolic health, and perhaps even extend lifespan.
    Several methods of this eating pattern exist.
    Every method can be effective, but figuring out which one works best depends on the individual.`},
  ];
  constructor(
    private nutritionService: NutritionService
  ) { }

  ngOnInit() {
    this.nutritionService.findAllCategories()
    .pipe(finalize(() => {
     this.isLoading = false;
    })).subscribe(res => {
      this.nutritionCategories = res;
    });
  }

}
