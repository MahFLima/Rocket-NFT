import React from "react";
import CardAstronaut from "../CardAstronaut";

import { Container, Title, Content, Astronauts } from "./styles";

export const ViewBestWeek: React.FC = () => {
  const astronaut = [
    {
      name: "Astronauta 1",
      author: "Mayk Brito",
      srcImg: "/assets/astronauta 1.png",
      value: "1.50",
    },
    {
      name: "Astronauta 2",
      author: "Jakeliny Gracielly",
      srcImg: "/assets/astronauta-2.png",
      value: "2.0",
    },
    {
      name: "Astronauta 3",
      author: "João Inácio (Biro)",
      srcImg: "/assets/astronauta-3.png",
      value: "3.75",
    },
    {
      name: "Astronauta 4",
      author: "Tamires Santos",
      srcImg: "/assets/astronauta-4.png",
      value: "4.30",
    },
  ];
  return (
    <Container>
      <Title>
        <strong>Populares</strong> da semana
      </Title>
      <Content>
        <Astronauts>
          <CardAstronaut
            name={astronaut[0].name}
            author={astronaut[0].author}
            srcImg={astronaut[0].srcImg}
            value={astronaut[0].value}
          />
          <CardAstronaut
            name={astronaut[2].name}
            author={astronaut[2].author}
            srcImg={astronaut[2].srcImg}
            value={astronaut[2].value}
          />
        </Astronauts>
        <Astronauts>
          <CardAstronaut
            name={astronaut[1].name}
            author={astronaut[1].author}
            srcImg={astronaut[1].srcImg}
            value={astronaut[1].value}
          />
          <CardAstronaut
            name={astronaut[3].name}
            author={astronaut[3].author}
            srcImg={astronaut[3].srcImg}
            value={astronaut[3].value}
          />
        </Astronauts>
      </Content>
    </Container>
  );
};
