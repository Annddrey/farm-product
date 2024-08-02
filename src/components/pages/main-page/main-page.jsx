import React from "react";
import About from "/src/components/blocks/about/about";
import Features from "/src/components/blocks/features/features";

function MainPage({ features }) {
  return (
    <>
      <About />
      <Features cards={features} />
    </>
  );
}

export default MainPage;
