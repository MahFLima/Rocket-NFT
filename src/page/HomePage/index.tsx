import React, { useState } from "react";
import { Header } from "../../components/Header";
import { HomeNFT } from "../../components/HomeNFT";
import { MainPage } from "../../components/MainPage";
import { Back } from "../../components/Back";

import { Container } from "./styles";
import { MobileMenu } from "../../components/MobileMenu";

export const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  function handleMenu() {
    {isActive ? setIsActive(false) : setIsActive(true)}
  }
  return (
    <Container>
      <Header onClick={handleMenu}/>
      {isActive ? <MobileMenu click={() => {setIsActive(false)}}/> : (
        <>
          <HomeNFT/>
          <MainPage/>
          <Back/>
        </>
      )}
    </Container>
  );
};
