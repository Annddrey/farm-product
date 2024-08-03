import React from 'react';
import ProductCard from '/src/components/ui/product-card/product-card';
import { StyledSwiper } from './styled';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

import { Scrollbar, Mousewheel, Pagination } from 'swiper/modules';

function ProductSection({ products, setSwiperRef }) {
  return (
    <StyledSwiper
      onSwiper={setSwiperRef}
      slidesPerView={'auto'}
      scrollbar={{ draggable: true }}
      spaceBetween={12}
      direction={'vertical'}
      mousewheel
      modules={[Scrollbar, Mousewheel, Pagination]}
      pagination={{
        type: 'fanction',
      }}
    >
      {products?.length &&
        products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
}

export default ProductSection;
