import { useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import Categories from '../Categories/Categories';

import { selectIsError, selectIsLoading } from '../../redux/selectors';

import css from './Features.module.css';
import { ItemProps } from '../../types/campersTypes';
import ShowError from '../ShowError/ShowError';

const Features: React.FC<ItemProps> = ({ item }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const form = item?.form ? item.form : 'Not found';

  return (
    <>
      {!isLoading && !isError && (
        <div className={css.wrapper}>
          <div className={css.categoriesWrap}>
            <Categories item={item} />
          </div>
          <div className={css.featureDetailsWrap}>
            <h2 className={css.title}>Vehicle details</h2>
            <ul className={css.list}>
              <li className={css.listItem}>
                <p className={css.text}>Form</p>
                <p className={css.text}>
                  {form.charAt(0).toUpperCase() + form.slice(1)}
                </p>
              </li>
              <li className={css.listItem}>
                <p className={css.text}>Length</p>
                <p className={css.text}>{item?.length}</p>
              </li>
              <li className={css.listItem}>
                <p className={css.text}>Width</p>
                <p className={css.text}>{item?.width}</p>
              </li>
              <li className={css.listItem}>
                <p className={css.text}>Height</p>
                <p className={css.text}>{item?.height}</p>
              </li>
              <li className={css.listItem}>
                <p className={css.text}>Tank</p>
                <p className={css.text}>{item?.tank}</p>
              </li>
              <li className={css.listItem}>
                <p className={css.text}>Consumption</p>
                <p className={css.text}>{item?.consumption}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
      {isLoading && <Loader type='async' />}
      {isError && <ShowError />}
    </>
  );
};

export default Features;
