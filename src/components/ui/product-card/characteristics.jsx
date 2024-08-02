import React from "react";
import { StyledList, StyeldListText, ListItem } from "./styled";

function Characteristics({ characteristics }) {
  return (
    <StyledList>
      {characteristics.weight && (
        <ListItem>
          {"Масса: "}
          <StyeldListText>{characteristics.weight} кг.</StyeldListText>
        </ListItem>
      )}
      {characteristics.quality && (
        <ListItem>
          {"Качество: "}
          <StyeldListText>{characteristics.quality}</StyeldListText>
        </ListItem>
      )}
      {characteristics.cooking && (
        <ListItem>
          {"Применение: "}
          <StyeldListText>{characteristics.cooking}</StyeldListText>
        </ListItem>
      )}
      {characteristics.important && (
        <ListItem>
          {"Важно: "}
          <StyeldListText>{characteristics.important}</StyeldListText>
        </ListItem>
      )}
      {characteristics.shelfLife && (
        <ListItem>
          {"Срок годности: "}
          <StyeldListText>{characteristics.shelfLife}</StyeldListText>
        </ListItem>
      )}
      {characteristics.packageing && (
        <ListItem>
          {"Упаковка: "}
          <StyeldListText>{characteristics.packageing}</StyeldListText>
        </ListItem>
      )}
      {characteristics.storgeConditions && (
        <ListItem>
          {"Условия хранения: "}
          <StyeldListText>{characteristics.storgeConditions}</StyeldListText>
        </ListItem>
      )}
      {characteristics.origin && (
        <ListItem>
          {"Место происхождения: "}
          <StyeldListText>{characteristics.origin}</StyeldListText>
        </ListItem>
      )}
    </StyledList>
  );
}

export default Characteristics;
