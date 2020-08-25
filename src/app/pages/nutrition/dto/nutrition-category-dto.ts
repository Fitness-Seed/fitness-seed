import { NutritionDto } from './nutrition-dto';

export class NutritionCategoryDto {
    id: number;
    title: string;
    description: string;
    nutritions: NutritionDto[];
}