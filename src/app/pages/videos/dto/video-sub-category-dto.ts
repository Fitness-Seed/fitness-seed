import { VideoMainCategory } from './video-main-category-dto';
import { Video} from './video-dto';

export class VideoSubCategory{
  id: number |  null;
  title: string;
  description: string;
  category: VideoMainCategory | null;
  imageUrl: string;
  videos: Video[];
}
