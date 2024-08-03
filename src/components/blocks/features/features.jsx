import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import FeatureCard from '/src/components/ui/feature-card/feature-card';
import Button from '/src/components/ui/button/button';
import { Ul, Li } from '/src/components/styled';
import { AppRoute } from '/src/const';
import { StyledFeatures } from './styled';

function Features({ cards }) {
  return (
    <StyledFeatures>
      <Title size={TitleSize.MEDIUM} level={TitleLevel.H2}>
        Почему фермерские продукты лучше?
      </Title>
      <Ul isGridList>
        {cards &&
          cards.map((card) => (
            <Li key={card.title}>
              <FeatureCard {...card} />
            </Li>
          ))}
      </Ul>
      <Button to={AppRoute.ORDER}>Купить</Button>
    </StyledFeatures>
  );
}

export default Features;
