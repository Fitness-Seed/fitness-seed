import { VideoSubCategory } from './video-sub-category-dto';

export class Video{
  id: number | null;
  title: string;
  description: string;
  url: string;
  views: number;
  isPublished: boolean;
  category: VideoSubCategory |  null;
  categoryId: number | null;
}
