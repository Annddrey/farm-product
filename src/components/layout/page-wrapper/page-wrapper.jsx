import React from "react";
import { Outlet } from "react-router-dom";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";

import { StyledMain } from "./styled";

function PageWrapper() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
