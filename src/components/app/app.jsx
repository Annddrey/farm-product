import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import MainPage from '/src/components/pages/main-page/main-page';
import BuyPage from '/src/components/pages/buy-page/buy-page';
import { GlobalStyle } from './styled';
import { AppRoute } from '/src/const';
import ScrollToTop from '/src/components/ui/scroll-to-top/scroll-to-top';

import features from '/src/mocks/features';
import products from '/src/mocks/products';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
