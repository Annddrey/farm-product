import React from 'react';
import FeatureCard from './feature-card';

export default {
  title: 'Feature card',
};

function Template(args) {
  return <FeatureCard {...args} />;
}

export const PositiveCard = Template.bind({});

PositiveCard.args = {
  title: 'Еда намного вкуснее',
  description:
    'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
  image: 'https://i.ibb.co/xGg2GfP/eat-1.png',
  provider: 'Фермерские продукты',
  isNegative: false,
};

export const NegativeCard = Template.bind({});

NegativeCard.args = {
  title: 'Просроченные продукты',
  description:
    'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
  image: 'https://i.ibb.co/rHt4pHQ/garbage-1.png',
  provider: 'Магазинные продукты',
  isNegative: true,
};
