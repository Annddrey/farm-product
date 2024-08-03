import styled from 'styled-components';
import { Section } from '/src/components/styled';

export const StyledFeatures = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;
