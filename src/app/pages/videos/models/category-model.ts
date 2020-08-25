export class Category {
    id: number;
    title: string;
    type: 'upper-body'|'lower-body'|'challenge';
    noOfItems: number | null;
}
