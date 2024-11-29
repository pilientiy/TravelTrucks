import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../../Categories/Categories';
import LinkButton from '../../LinkButton/LinkButton';

import { selectFavorites } from '../../../redux/selectors';
import {
  addFavorite,
  removeFavorite,
} from '../../../redux/slices/favoritesSlice';
import { Vehicle } from '../../../types/campersTypes';

import css from './CatalogItem.module.css';

interface ImageItem {
  thumb: string;
  original: string;
}

interface CatalogItemProps {
  item: Vehicle;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const { id, name, price, location, description, rating, reviews, gallery } =
    item;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  const uniqId = () => Math.floor(Math.random() * (300000 - 300 + 1)) + 200;

  const ratingInfo = (rating: number, reviewsCount: number) =>
    reviewsCount === 1
      ? `${rating} (${reviewsCount} Review)`
      : `${rating} (${reviewsCount} Reviews)`;

  return (
    <>
      <li className={css.catalogCard}>
        {gallery
          .filter((_: ImageItem, index: number) => index === 0)
          .map((image: ImageItem) => (
            <img
              src={image.thumb}
              alt='Truck for camping'
              className={css.cardImg}
              key={uniqId()}
            />
          ))}
        <div className={css.cardContent}>
          <div className={css.cardTitle}>
            <div className={css.cardTitleWrap}>
              <h2>{name}</h2>
              <p>{`€${price.toFixed(2)}`}</p>
            </div>
            <button
              type='button'
              onClick={handleToggleFavorite}
              className={css.favoriteIconBtn}
            >
              <svg width={25} height={24}>
                <use
                  href={`/isFavoriteIcon/isFavoriteIcons.svg#icon-Property-1${clsx(
                    isFavorite ? 'pressed' : 'Default'
                  )}`}
                ></use>
              </svg>
            </button>
          </div>
          <div className={css.cardInfo}>
            <div>
              <svg width={16} height={16}>
                <use href='/ratingIcons/ratingIcons.svg#icon-Property-1Pressed'></use>
              </svg>
              <p className={css.ratingText}>
                {ratingInfo(rating, reviews.length)}
              </p>
            </div>
            <div>
              <svg width={16} height={16} aria-hidden='true'>
                <use href='/categories/secondSprite.svg#icon-map'></use>
              </svg>
              <p className={css.locationText}>{location}</p>
            </div>
          </div>
          <p className={css.cardDescription}>{description}</p>
          <Categories item={item} />
          <LinkButton link={`/campers/${id}`} newClassName={css.showMoreLink}>
            Show more
          </LinkButton>
        </div>
      </li>
    </>
  );
};

export default CatalogItem;
