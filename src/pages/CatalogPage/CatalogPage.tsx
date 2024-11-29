import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Catalog from '../../components/Catalog/Catalog';
import SidebarFilters from '../../components/SidebarFilters/SidebarFilters';
import Loader from '../../components/Loader/Loader';

import { selectIsError, selectIsLoading } from '../../redux/selectors';
import { clearCampers } from '../../redux/slices/campersSlice';
import { fetchAllCampers } from '../../redux/operations';
import { AppDispatch } from '../../redux/store';

import css from './CatalogPage.module.css';
import { clearFilters } from '../../redux/slices/filtersSlice';
import ShowError from '../../components/ShowError/ShowError';

const CatalogPage: React.FC = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(clearFilters());
    dispatch(clearCampers());
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <SidebarFilters />
      {!isLoading && !isError && <Catalog />}
      {isLoading && <Loader type='async' />}
      {isError && <ShowError />}
    </div>
  );
};

export default CatalogPage;
