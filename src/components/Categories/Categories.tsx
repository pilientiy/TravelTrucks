import { Vehicle } from '../../types/campersTypes';
import css from './Categories.module.css';

interface Category {
  href: string;
  text: string;
}

type CategoriesObj = {
  [key: string]: Category;
};

const Categories: React.FC<{ item: Vehicle | null }> = ({ item }) => {
  const categoriesObj: CategoriesObj = {
    AC: { href: '/categories/sprite.svg#icon-wind', text: 'AC' },
    TV: { href: '/categories/secondSprite.svg#icon-TV', text: 'TV' },
    transmission: {
      href: '/categories/sprite.svg#icon-diagram',
      text: item?.transmission === 'automatic' ? 'Automatic' : 'Manual',
    },
    bathroom: { href: '/categories/sprite.svg#icon-shower', text: 'Bathroom' },
    kitchen: { href: '/categories/sprite.svg#icon-cup-hot', text: 'Kitchen' },
    radio: { href: '/categories/sprite.svg#icon-radios', text: 'Radio' },
    refrigerator: {
      href: '/categories/sprite.svg#icon-fridge',
      text: 'Refrigerator',
    },
    microwave: {
      href: '/categories/sprite.svg#icon-microwave',
      text: 'Microwave',
    },
    gas: { href: '/categories/sprite.svg#icon-gas-stove', text: 'Gas' },
    water: { href: '/categories/sprite.svg#icon-water', text: 'Water' },
  };

  return (
    <ul className={css.categoryList}>
      {Object.keys(categoriesObj).map(key =>
        item?.[key as keyof Vehicle] ? (
          <li key={key} className={css.category}>
            <svg
              width={20}
              height={20}
              className={
                key === 'water' || key === 'microwave' || key === 'gas'
                  ? css.icon
                  : undefined
              }
            >
              <use href={categoriesObj[key].href}></use>
            </svg>
            <p>{categoriesObj[key].text}</p>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Categories;
