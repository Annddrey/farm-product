import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import {
  StyledCard,
  CardHeader,
  StyledProvider,
  StyledText,
} from './styled.js';

export const Providers = {
  FARM: 'farm',
  SHOP: 'shop',
};

function FeatureCard({ image, title, description, provider, isNegative }) {
  let options = {
    bgCard: '#E1EDCE',
    bgTitle: '#88AA4D',
    text: 'Фермерские продукты',
  };

  if (isNegative) {
    options = {
      bgCard: '#F8DDD7',
      bgTitle: '#F75531',
      text: 'Магазинные продукты',
    };
  }

  return (
    <StyledCard style={{ backgroundColor: options.bgCard }}>
      <CardHeader>
        <img src={image} alt={title} />
        <div>
          <StyledProvider style={{ backgroundColor: options.bgTitle }}>
            {provider}
          </StyledProvider>
          <Title size={TitleSize.VERY_SMALL} level={TitleLevel.H3}>
            {title}
          </Title>
        </div>
      </CardHeader>
      <StyledText>{description}</StyledText>
    </StyledCard>
  );
}

export default FeatureCard;
