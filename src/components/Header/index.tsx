import Image from "next/image";
import React, { FunctionComponent } from "react";

type Props = React.HTMLProps<HTMLButtonElement>

import { Container, Title, NavMenu, Button, IconMenu, ButtonMenu } from "./styles";

export const Header: FunctionComponent<Props> = ({onClick}) => {
  return (
    <Container>
      <Title>
        Rocket <strong>NFTs</strong>
      </Title>
      <NavMenu>
        <li>
          <a href="#home-nft">Comprar NFTs</a>
        </li>
        <li>
          <a href="#main">Sobre</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </NavMenu>
      <Button>
        <Image width={30} height={30} src='/assets/MetaMask.svg' alt="logo meta mask"/>
        Conectar carteira
      </Button>
      <ButtonMenu onClick={onClick}>
        <IconMenu/>
      </ButtonMenu>
    </Container>
  );
};
