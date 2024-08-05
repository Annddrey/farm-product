import React from 'react';
import Button from './button';

export default {
  title: 'Кнопка (Button)',
};

function Template(args) {
  return <Button {...args} />;
}

export const ButtonWithWidth = Template.bind({});

ButtonWithWidth.args = {
  children: 'Кнопка',
  width: 100,
};
