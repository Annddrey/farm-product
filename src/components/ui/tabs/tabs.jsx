import React from "react";
import { TitleLevel } from "/src/components/ui/title/title";
import { TabsWrapper, StyledTitle } from "./styled";
import { Li } from "/src/components/styled";

function Tabs({ tabs, tabComponent, activeTab, onChange }) {
  const TabComponent = tabComponent;

  return (
    <>
      <TabsWrapper>
        {tabs.map((tab, index) => {
          if (activeTab === index) {
            return (
              <Li key={tab.title}>
                <TabComponent $active>
                  <StyledTitle level={TitleLevel.H3}>{tab.title}</StyledTitle>
                </TabComponent>
              </Li>
            );
          }
          return (
            <Li key={tab.title}>
              <TabComponent onClick={() => onChange(index)}>
                <StyledTitle level={TitleLevel.H3}>{tab.title}</StyledTitle>
              </TabComponent>
            </Li>
          );
        })}
      </TabsWrapper>
      <div>{tabs[activeTab].content}</div>
    </>
  );
}

export default Tabs;
