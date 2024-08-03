import React, { useState } from 'react';
import FormSection from '/src/components/blocks/form-section/form-section';
import ProductSection from '/src/components/blocks/products-section/products-section';

import { StyledPage } from './styled';

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const arrayCheckboxesStates =
    products?.length &&
    products.map(() => useState(false));

  const selectedProducts = [];
  products.forEach((product, i) => {
    const isSelectedProduct = arrayCheckboxesStates[i][0];
    if (isSelectedProduct) {
      selectedProducts.push(product.name);
    }
  });

  const selectedProductsIds = [];
  products.forEach((product, i) => {
    const isSelectedProduct = arrayCheckboxesStates[i][0];
    if (isSelectedProduct) {
      selectedProductsIds.push(product.id);
    }
  });

  const hendlerLabelClick = (index) => {
    const isChecked = arrayCheckboxesStates[index][0];
    if (!isChecked) {
      swiperRef.slideTo(index, 500);
    }
  };

  let fullPrice = 0;
  products.forEach((product, i) => {
    const isSelectedProduct = arrayCheckboxesStates[i][0];
    if (isSelectedProduct) {
      return (fullPrice += product.price);
    }
  });

  return (
    <StyledPage>
      <FormSection
        products={products}
        arrayCheckboxStates={arrayCheckboxesStates}
        selectedProducts={selectedProducts}
        onLabelClick={hendlerLabelClick}
        fullPrice={fullPrice}
      />
      <ProductSection products={products} setSwiperRef={setSwiperRef} />
    </StyledPage>
  );
}

export default BuyPage;
