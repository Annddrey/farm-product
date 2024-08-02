import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  StyledCard,
  CardHeader,
  StyledProvider,
  StyledText,
} from "./styled.js";

const Providers = {
  FARM: "farm",
  SHOP: "shop",
};

function FeatureCard({ image, title, text, provider }) {
  let options;

  switch (provider) {
    case Providers.FARM:
      options = {
        bgCard: "#E1EDCE",
        bgTitle: "#88AA4D",
        text: "Фермерские продукты",
      };
      break;
    case Providers.SHOP:
      options = {
        bgCard: "#F8DDD7",
        bgTitle: "#F75531",
        text: "Магазинные продукты",
      };
      break;
    default:
      options = {
        bgCard: "#f0f0f0",
        bgTitle: "#dadada",
        text: "default",
      };
  }

  return (
    <StyledCard style={{ backgroundColor: options.bgCard }}>
      <CardHeader>
        <img src={image} alt={title} />
        <div>
          <StyledProvider style={{ backgroundColor: options.bgTitle }}>
            {options.text}
          </StyledProvider>
          <Title size={TitleSize.VERY_SMALL} level={TitleLevel.H3}>
            {title}
          </Title>
        </div>
      </CardHeader>
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
}

export default FeatureCard;
