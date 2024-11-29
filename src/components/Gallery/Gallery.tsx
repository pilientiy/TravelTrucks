import { gallery } from '../../types/campersTypes';

import css from './Gallery.module.css';

type GalleryProps = {
  gallery: gallery[] | undefined;
};

const Gallery = ({ gallery }: GalleryProps) => {
  return (
    <ul className={css.gallery}>
      {gallery?.map((image, index) => {
        return (
          <li key={index} className={css.galleryItem}>
            <img
              src={image.thumb}
              alt='Picture of truck benefit'
              className={css.galleryImg}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
