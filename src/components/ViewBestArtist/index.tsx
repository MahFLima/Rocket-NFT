import React from "react";
import Carousel from "react-material-ui-carousel";
import CardArtist from "../CardArtist";

import { Container, Title, GroupArtists, Wrapper } from "./styles";

export const ViewBestArtist: React.FC = () => {
  const artistas = [
    { name: "Mayk Brito", photos: "80", srcImg: "/assets/artista-1.png" },
    { name: "Jakeliny G.", photos: "99", srcImg: "/assets/artista-2.png" },
    { name: "João I. (Biro)", photos: "50", srcImg: "/assets/artista-3.png" },
    { name: "Tamires Santos", photos: "43", srcImg: "/assets/artista-4.png" },
    { name: "Ana Silva", photos: "28", srcImg: "/assets/artista-5.png" },
    { name: "Diego F.", photos: "20", srcImg: "/assets/artista-6.png" },
  ];
  return (
    <Container>
      <Title>
        Melhores <strong>artistas</strong>
      </Title>
      <Wrapper>
        <Carousel>
          {artistas.map((item, index) => {
            return (
              <CardArtist
                key={index}
                name={item.name}
                photos={item.photos}
                srcImg={item.srcImg}
              />
            );
          })}
        </Carousel>
      </Wrapper>
      <GroupArtists>
        {artistas.map((item, index) => {
          return (
            <CardArtist
              key={index}
              name={item.name}
              photos={item.photos}
              srcImg={item.srcImg}
            />
          );
        })}
      </GroupArtists>
      <a href="#">
        ver todos os artistas
        <img src="/assets/arrow-orange.svg" alt="seta diagonal" />
      </a>
    </Container>
  );
};
