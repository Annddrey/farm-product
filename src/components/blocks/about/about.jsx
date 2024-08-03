import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import { StyledAbout, StyledText } from './styled';

function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <StyledText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </StyledText>
    </StyledAbout>
  );
}

export default About;
