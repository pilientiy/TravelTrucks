import { useSelector } from 'react-redux';

import Loader from '../Loader/Loader';

import { selectIsError, selectIsLoading } from '../../redux/selectors';
import { ItemProps } from '../../types/campersTypes';

import css from './Reviews.module.css';
import RatingStars from './RatingStars/RatingStars';
import ShowError from '../ShowError/ShowError';

const Reviews: React.FC<ItemProps> = ({ item }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {!isLoading && !isError && (
        <div className={css.wrapper}>
          <ul className={css.list}>
            {item?.reviews.map((item, index) => {
              return (
                <li key={index}>
                  <div className={css.commentWrap}>
                    <div className={css.avatar}>
                      {item.reviewer_name.charAt(0).toUpperCase()}
                    </div>
                    <div className={css.commentHead}>
                      <p className={css.name}>{item.reviewer_name}</p>
                      <RatingStars reviewItem={item} />
                    </div>
                  </div>
                  <p className={css.descr}>{item.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {isLoading && <Loader type='async' />}
      {isError && <ShowError />}
    </>
  );
};

export default Reviews;
