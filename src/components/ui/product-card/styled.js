import styled, { css } from "styled-components";
import Title from "/src/components/ui/title/title";
import { P } from "/src/components/styled";
import { Ul, Li } from "/src/components/styled";

export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 248px auto;
  column-gap: ${(props) => props.theme.intend};
  height: 288px;
  padding: ${(props) => props.theme.intend};
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  box-sizing: border-box;
  animation: tick 0.2s ease-in-out;
`;

export const ImageWrapper = styled.div`
  grid-column: 1;
  border-radius: 6px;
  overflow: hidden;
  width: 248px;
  height: 248px;
`;

export const Image = styled.img`
  width: 248px;
  height: 248px;
  object-fit: cover;
  border-radius: inherit;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  & > *:not(:first-child) {
    margin-left: 16px;
  }
`;

export const StyledTab = styled.button`
  display: block;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 3px;
  color: ${(props) => (props.$active ? "#ffffff" : "inherit")};
  background-color: ${(props) =>
    props.$active ? "#88AA4D" : props.theme.colorGray};
  transition: background-color 0.3s, box-shadow 0.3s;
  animation: tick 0.2s ease-in-out;

  ${(props) => {
    if (!props.$active) {
      return css`
        &:hover {
          box-shadow: inset 0 0 5px 0px rgba(0, 0, 0, 0.2),
            0px 2px 6px 0px rgba(0, 0, 0, 0.04),
            0px 0px 1px 0px rgba(0, 0, 0, 0.04);
        }
      `;
    }
  }};
`;

export const StyledDescription = styled(P)`
  font-size: 14px;
  line-height: 21px;
  overflow: hidden;
  max-height: 105px;
`;

export const StyledList = styled(Ul)`
  max-height: 153px;
  overflow: hidden;
`;
export const ListItem = styled(Li)`
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const StyeldListText = styled.span`
  font-weight: 400;
`;

export const Price = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-right: auto;
  padding: 4px 8px;
  margin-top: auto;
  background-color: ${(props) => props.theme.coloredBackground};
  border-radius: 3px;
  animation: tick 0.2s ease-in-out;
`;
