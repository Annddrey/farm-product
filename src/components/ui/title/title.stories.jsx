import React from 'react';
import Title, { TitleSize } from './title';

export default {
  title: 'Заголовок (title)',
};

export function BigTitle() {
  return <Title size={TitleSize.BIG}>Заголово</Title>;
}
export function SmallTitle() {
  return <Title size={TitleSize.SMALL}>Заголово</Title>;
}
