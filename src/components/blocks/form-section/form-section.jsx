import React, { useState } from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Ul, Li } from "/src/components/styled";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import {
  Wrapper,
  SectionWrapper,
  StyledAddressInput,
  StyledCheckbox,
  Price,
  ValuePrice,
  StyledLabelForProducts,
  StyeldButton,
} from "./styled";

function FormSection({
  products,
  arrayCheckboxStates,
  selectedProducts,
  onLabelClick = () => {},
  fullPrice,
}) {
  const [addressInputValue, setAddressInputValue] = useState("");

  return (
    <Wrapper>
      <SectionWrapper>
        <Title size={TitleSize.VERY_SMALL} level={TitleLevel.H3} marginBt={12}>
          Выберите продукты
        </Title>
        <Ul>
          {products &&
            products.length &&
            products.map((product, index) => (
              <Li key={product.id}>
                <StyledLabelForProducts>
                  <Checkbox
                    checkboxCompanent={StyledCheckbox}
                    value={product.id}
                    text={product.name}
                    isChecked={arrayCheckboxStates[index][0]}
                    onClick={() => onLabelClick(index)}
                    onChange={() => {
                      const setCheckboxState = arrayCheckboxStates[index][1];
                      const checkboxState = arrayCheckboxStates[index][0];
                      setCheckboxState(!checkboxState);
                    }}
                  />
                </StyledLabelForProducts>
              </Li>
            ))}
        </Ul>
      </SectionWrapper>

      <SectionWrapper as="form" action="" method="get">
        <Title size={TitleSize.VERY_SMALL} level={TitleLevel.H3} marginBt={24}>
          Сделать заказ
        </Title>
        <StyledAddressInput
          placeholder="Введите адрес доставки"
          title="Введите адрес доставки"
          value={addressInputValue}
          onChange={(evt) => {
            setAddressInputValue(evt.target.value);
          }}
        />
        <Price>
          {"Цена: "}
          <ValuePrice>{fullPrice} руб.</ValuePrice>
        </Price>

        <StyeldButton
          type="submit"
          onClick={() => {
            window.alert(
              `Выбранные продукты:\n${selectedProducts.join(
                "\n"
              )}\n\nАдрес: ${addressInputValue}\n\nЦена: ${fullPrice} руб.`
            );
          }}
        >
          Купить
        </StyeldButton>
      </SectionWrapper>
    </Wrapper>
  );
}

export default FormSection;
