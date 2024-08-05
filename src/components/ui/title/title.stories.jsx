import React from 'react';
import Title, { TitleSize, TitleLevel } from './title';

export default {
  title: 'Заголовок (title)',
};

function Template(args) {
  return <Title {...args} />;
}

export const BigTitle = Template.bind({});

BigTitle.args = {
  children: 'Заголовок',
  size: TitleSize.BIG,
};

export const MediumTitle = Template.bind({});

MediumTitle.args = {
  children: 'Заголовок',
  size: TitleSize.MEDIUM,
};

export const SmallTitle = Template.bind({});

SmallTitle.args = {
  children: 'Заголовок',
  size: TitleSize.SMALL,
};

export const VerySmallTitle = Template.bind({});

VerySmallTitle.args = {
  children: 'Заголовок',
  size: TitleSize.VERY_SMALL,
};

export const SetTitleLevel = Template.bind({});

SetTitleLevel.args = {
  children: 'Заголовок (<h3>Заголовок<h3>)',
  size: TitleSize.SMALL,
  level: TitleLevel.H3,
};

export const SetMarginBotton = Template.bind({});

SetMarginBotton.args = {
  children: 'Заголовок',
  size: TitleSize.SMALL,
  level: TitleLevel.H3,
  marginBt: 18,
};
