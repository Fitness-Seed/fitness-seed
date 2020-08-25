import { Category } from './category-model';
export const mainCategories = [
    {
        id: 'upper-body',
        title: 'Upper Body'
    },
    {
        id: 'lower-body',
        title: 'Lower Body'
    },
    {
        id: 'challenge',
        title: 'Video Challenge'
    }
]
export class CategoryData {
 
   static categories: Category[] = [
        {
            id: 1,
            title: 'Arms',
            type: 'upper-body',
            noOfItems: 1
        },
        {
            id: 2,
            title: 'Shoulder',
            type: 'upper-body',
            noOfItems: 1
        },
        {
            id: 3,
            title: 'Back',
            type: 'upper-body',
            noOfItems: 1
        },
        {
            id: 4,
            title: 'Chest',
            type: 'upper-body',
            noOfItems: 1
        },
        {
            id: 5,
            title: 'Abs',
            type: 'upper-body',
            noOfItems: 1
        },
        {
            id: 6,
            title: 'Butt',
            type: 'lower-body',
            noOfItems: 1
        },
        {
            id: 7,
            title: 'Hamstrings',
            type: 'lower-body',
            noOfItems: 1
        },
        {
            id: 8,
            title: 'Thighs',
            type: 'lower-body',
            noOfItems: 1
        },
        {
            id: 9,
            title: 'Curves',
            type: 'lower-body',
            noOfItems: 1
        },
        {
            id: 10,
            title: 'Hips',
            type: 'lower-body',
            noOfItems: 1
        },
        {
            id: 11,
            title: 'Daily',
            type: 'challenge',
            noOfItems: 1
        },
        {
            id: 12,
            title: 'Weekly',
            type: 'challenge',
            noOfItems: 1
        },
        {
            id: 13,
            title: 'Monthly',
            type: 'challenge',
            noOfItems: 1
        }
    ];
}