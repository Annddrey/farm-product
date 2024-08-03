import React from 'react';
import { Ul } from '/src/components/styled';
import { ListItem, StyeldListText } from './styled';

function Features({ features }) {
  return (
    <Ul>
      {features.nutValue && (
        <ListItem>
          {'Пищевая ценность: '}
          <StyeldListText>{features.nutValue}</StyeldListText>
        </ListItem>
      )}
      {features.enValue && (
        <ListItem>
          {'Энергетическая ценность: '}
          <StyeldListText>{features.enValue}</StyeldListText>
        </ListItem>
      )}
    </Ul>
  );
}

export default Features;
