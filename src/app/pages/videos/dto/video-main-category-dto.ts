import { VideoSubCategory } from './video-sub-category-dto';

export class VideoMainCategory {
  id: number | null;
  title: string;
  description: string;
  subCategories: VideoSubCategory[];
}
