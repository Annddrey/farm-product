import React, { useState } from 'react';
import { TitleLevel, TitleSize } from '/src/components/ui/title/title';
import {
  StyledArticle,
  ImageWrapper,
  Image,
  StyledTitle,
  Wrapper,
  StyledTab,
  Price
} from './styled';
import Description from './descriptin';
import Characteristics from './characteristics';
import Features from './features';
import Tabs from '/src/components/ui/tabs/tabs';

function ProductCard({ product }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'Описание',
      content: <Description text={product.description} />,
    },
    {
      title: 'Характеристики',
      content: <Characteristics characteristics={product.specs} />,
    },
    {
      title: 'Свойства',
      content: (
        <Features
          features={{
            nutValue: product.specs.nutValue,
            enValue: product.specs.enValue,
          }}
        />
      ),
    },
  ];

  return (
    <StyledArticle>
      <ImageWrapper>
        <Image width={248} height={248} src={product.image} />
      </ImageWrapper>
      <Wrapper>
        <StyledTitle level={TitleLevel.H2} size={TitleSize.SMALL}>
          {product.name}
        </StyledTitle>
        <Tabs
          tabs={tabs}
          tabComponent={StyledTab}
          activeTab={activeTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
        />
        {tabs[activeTab].title === 'Описание' && (
          <Price>{`${product.price} руб. / ${product.specs.weight}`}</Price>
        )}
      </Wrapper>
    </StyledArticle>
  );
}

export default ProductCard;
