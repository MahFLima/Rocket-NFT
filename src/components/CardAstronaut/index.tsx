import React from "react";

import { Container } from "./styles";

type Props ={
  name: string
  author: string
  srcImg: string
  value: string
}

const CardAstronaut: React.FC<Props> = ({name, author, srcImg, value}) => {
  return (
    <Container>
      <span>
        {name}
        <img src="/assets/arrow-white.svg" alt="seta em diaginal"/>
      </span>
      <p>
        {author} 
        <span> {value} RKT</span>
      </p>
      <img src={srcImg} alt="astronauta"/>
    </Container>
  );
};

export default CardAstronaut;
