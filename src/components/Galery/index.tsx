import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import React from "react";
import { Menu } from "styled-icons/boxicons-regular";

import { Container, Content, Item, Wrapper } from "./styles";

export const Galery: React.FC = () => {
  const photogalery = [
    "/assets/galeria-1.png",
    "/assets/galeria-2.png",
    "/assets/galeria-3.png",
    "/assets/galeria-4.png",
    "/assets/galeria-5.png",
    "/assets/galeria-6.png",
    "/assets/galeria-7.png",
    "/assets/galeria-8.png",
  ];
  return (
    <Container>
      <Wrapper>
        <Carousel duration={300}>
          {photogalery.map((item, index) => {
            return (
              <Item key={index}>
                <img  src={item} alt="imagem astronauta"/>
              </Item>
            );
          })}
        </Carousel>
      </Wrapper>

      <Content>
        <Item>
          <img src="/assets/galeria-1.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-2.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-3.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-4.png" alt="imagem astronauta"/>
        </Item>
      </Content>
      <Content>
        <Item>
          <img src="/assets/galeria-5.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-6.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-7.png" alt="imagem astronauta"/>
        </Item>
        <Item>
          <img src="/assets/galeria-8.png" alt="imagem astronauta"/>
        </Item>
      </Content>
    </Container>
  );
};


