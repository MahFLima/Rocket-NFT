import React from "react";
import Image from "next/image";
import { Container, Button, NavMenu } from "./styles";

interface propsMenu{
  click: () => void
}

export const MobileMenu: React.FC<propsMenu> = ({click}) => {
  return (
    <Container>
      <Button>
        <Image width={30} height={30} src='/assets/MetaMask.svg' alt="logo meta mask"/>
        Conectar carteira
      </Button>
      <NavMenu>
        <li>
          <a onClick={click} href="#home-nft">Comprar NFTs</a>
        </li>
        <li>
          <a onClick={click} href="#main">Sobre</a>
        </li>
        <li>
          <a onClick={click} href="#faq">FAQ</a>
        </li>
      </NavMenu>
    </Container>
  );
};
