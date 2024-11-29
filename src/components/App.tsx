import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.js';
import Loader from './Loader/Loader.js';
import { Toaster } from 'react-hot-toast';

const Layout = lazy(() => import('./Layout.js'));
const HomePage = lazy(() => import('../pages/HomePage.js'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage.js'));
const MoreInfoPage = lazy(() => import('../pages/DetailsPage/DetailsPage.js'));

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <Suspense fallback={<Loader type='routing' />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/campers' element={<CatalogPage />} />
            <Route path='/campers/:id' element={<MoreInfoPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
