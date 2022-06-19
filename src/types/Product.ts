import type { Languages } from './Languages';
import type { Features } from './Features';
import type { File } from './Files';
import type { Image } from './Image';
import type { Specifications } from './Specifications';
import type { Tour } from './Tour';

export interface Product {
  id: number;
  description: Languages;
  features: Features[];
  files: File[];
  gallery: Image[];
  image: Image;
  name: Languages;
  slug: Languages;
  specifications: Specifications[];
  tour: Tour[];
  videos: Languages[];
}
