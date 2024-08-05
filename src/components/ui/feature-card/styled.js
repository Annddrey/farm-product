import styled from 'styled-components';
import { P } from '/src/components/styled';

export const StyledCard = styled.article`
  padding: ${(props) => props.theme.intend};
  min-height: 197px;
  box-sizing: border-box;
  border-radius: 6px;
  max-width: 510px;
`;

export const CardHeader = styled.header`
  display: grid;
  grid-template-columns: 54px auto;
  column-gap: 20px;
`;

export const StyledProvider = styled.span`
  display: inline-block;
  padding: 4px 10px;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  border-radius: 4px;
`;

export const StyledText = styled(P)`
  margin: 0;
  margin-top: 20px;
  line-height: 27px;
`;
