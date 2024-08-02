import styled from "styled-components";
import aboutImage from "/src/assets/about.svg";
import { Section, P } from "/src/components/styled";

export const StyledAbout = styled(Section)`
  padding: 183px 553px 183px ${(props) => props.theme.pagePadding};
  background-repeat: no-repeat;
  background-position: bottom 0 right 90px;
  background-color: ${(props) => props.theme.coloredBackground};
  background-image: url(${aboutImage});
`;

export const StyledText = styled(P)`
  margin-top: 24px;
  max-width: 538px;
  line-height: 27px;
`;
