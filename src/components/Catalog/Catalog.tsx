import { useDispatch, useSelector } from 'react-redux';

import CatalogItem from './CatalogItem/CatalogItem';

import { AppDispatch } from '../../redux/store';
import { setCurrentPage } from '../../redux/slices/campersSlice';
import { fetchCampersByFilters } from '../../redux/operations';
import {
  selectCampers,
  selectCurrentPage,
  selectLimitItems,
  selectTotalItems,
} from '../../redux/selectors';
import { Vehicle } from '../../types/campersTypes';

import css from './Catalog.module.css';

const Catalog: React.FC = () => {
  const uniqId = () => Math.floor(Math.random() * (500000 - 500 + 1)) + 100;

  const dispatch = useDispatch<AppDispatch>();

  const visibleItems = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectLimitItems);
  const totalItems = useSelector(selectTotalItems);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage = currentPage >= totalPages;

  const loadMoreHandle = async () => {
    dispatch(setCurrentPage(currentPage + 1));
    await dispatch(fetchCampersByFilters());
  };

  return (
    <div className={css.catalogWrapper}>
      <ul className={css.catalogList}>
        {visibleItems.map((item: Vehicle) => (
          <CatalogItem item={item} key={uniqId()} />
        ))}
      </ul>
      {isLastPage ? (
        <p>No more campers</p>
      ) : (
        <button
          type='button'
          onClick={() => loadMoreHandle()}
          className={css.loadMoreBtn}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Catalog;
