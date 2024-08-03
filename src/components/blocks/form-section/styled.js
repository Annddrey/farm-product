import styled, { css } from 'styled-components';
import Button from '/src/components/ui/button/button';
import { P } from '/src/components/styled';
import tickImage from '/src/assets/tick.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const stylesForChecked = css`
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${tickImage});
`;

export const Wrapper = styled.div`
  margin-right: ${(props) => props.theme.intend};
  width: 353px;
  box-sizing: border-box;
  height: min-content;
  flex: 0 0 auto;
`;

export const SectionWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.intend};
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 0px 1px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.theme.intend};
  animation: tick 0.2s ease-in-out;
`;

export const StyledLabelForProducts = styled.label`
  font-size: 16px;
  line-height: 27px;

  & > input:checked + span::after {
    animation: tick 0.2s ease-in-out;
  }
`;

export const StyledCheckbox = styled.span`
  position: relative;
  display: block;
  padding: 15px 0;
  padding-right: 30px;

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    right: 0px;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
    props.$checked ? props.theme.bgButtonColor : props.theme.colorGray};
    box-sizing: border-box;
    ${(props) => (props.$checked ? stylesForChecked : '')}
  }
`;

export const StyledAddressInput = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  line-height: 21px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorGray};
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Price = styled(P)`
  font-size: 14px;
  margin-top: 20px;
`;

export const ValuePrice = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  margin-top: 8px;
`;

export const StyeldButton = styled(Button)`
  width: 100%;
  margin-top: 32px;
`;
