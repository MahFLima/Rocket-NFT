import React from "react";
import Image from "next/image";

import { Container, Content, FeedMark, FeedNFT } from "./styles";
import { Galery } from "../Galery";

export const HomeNFT: React.FC = () => {
  return (
    <Container id="home-nft">
      <Content>
        <FeedNFT>
          <h1>
            Descubra a verdadeira arte digital e colecione diversas
            <strong> NFTs</strong>
          </h1>
        </FeedNFT>
        <Image
          width={200}
          height={200}
          src="/assets/badge.svg"
          alt="logo explore a arte"
        />
        <FeedMark>
          <p>
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </p>
          <section>
            <Image
              width={169}
              height={88}
              src="/assets/group-avarts.png"
              alt="grupo de artistas"
            />
            <span>
              <strong>+10</strong> Artistas selecionados
            </span>
          </section>
        </FeedMark>
      </Content>
      <Galery/>
    </Container>
  );
};


