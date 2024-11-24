// src/pages/CatalogPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../redux/campersSlice';
// src/pages/CatalogPage.jsx
import '../styles/CatalogPage.css'

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, status, error } = useSelector((state) => state.campers);

  // Виконуємо запит за кемперами при завантаженні сторінки
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog of Campers</h1>
      {status === 'loading' && <p>Loading campers...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {campers.map((camper) => (
            <li key={camper.id}>{camper.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CatalogPage;
