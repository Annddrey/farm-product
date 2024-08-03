import styled from 'styled-components';
import Title from '/src/components/ui/title/title';
import { Ul } from '/src/components/styled';

export const TabsWrapper = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;

  & > li:not(:first-child) {
    display: flex;
    margin-left: 16px;
  }
`;

export const StyledTitle = styled(Title)`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
`;
