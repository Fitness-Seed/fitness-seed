import { NutritionCategoryDto } from './nutrition-category-dto';

export class NutritionDto {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: NutritionCategoryDto;
}