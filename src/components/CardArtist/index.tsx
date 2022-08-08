import React from 'react';

import { Container, User } from './styles';

type Props = {
  name: string;
  photos: string;
  srcImg: string;
}

const CardArtist: React.FC<Props> = ({name,photos,srcImg}) => {
  return (
    <Container>
      <img src={srcImg} alt={name}/>
      <User>
        <p>{name}</p>
        <span>{photos} Fotografias</span>
      </User>
    </Container>
  );
}

export default CardArtist;