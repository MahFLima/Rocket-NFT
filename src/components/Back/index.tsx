import React from "react";

import {
  Container,
  Title,
  Content,
  FormEmail,
  NavOptions,
  Footer,
  LogoInstagram,
  LogoYoutube,
  LogoTwitter,
  LogoEmail,
} from "./styles";

export const Back: React.FC = () => {
    const empresa = ["Sobre", "Serviços", "Time", "Carreira"]
    const mapa = ["Galeria", "Populares", "Vendas", "Contato"]
    const links = ["FAQs", "Termos", "Politica", "Ajuda"]
 
  return (
    <Container id="faq">
      <Title>
        <h1>
          Rocket <strong>NFTs</strong>
        </h1>
        <a href="#">
          <img src="/assets/arrow-black.svg" alt="seta para cima" />
        </a>
      </Title>
      <Content>
        <FormEmail>
          <p>
            Fique por dentro de
            <br />
            <span>todas as novidades</span>
          </p>
          <div>
            <input type="email" placeholder="nft@rocketseat.com.br" />
            <button>Enviar</button>
          </div>
        </FormEmail>
        <NavOptions>
          <div>
            <strong>Empresa</strong>
            {empresa.map((item, index) => {
              return(
                <a href="#" key={index}>{item}</a>
              )
            })}
          </div>
          <div>
            <strong>Mapa</strong>
            {mapa.map((item, index) => {
              return(
                <a href="#" key={index}>{item}</a>
              )
            })}

          </div>
          <div>
            <strong>Links</strong>

            {links.map((item, index) => {
              return(
                <a href="#" key={index}>{item}</a>
              )
            })}
          </div>
        </NavOptions>
      </Content>
      <Footer>
        <a target="_blank" rel="noreferrer"  href="https://www.rocketseat.com.br/">www.rocketseat.com.br</a>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/rocketseat_oficial/">
            <LogoInstagram />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/RocketSeat">
            <LogoYoutube />
          </a>
          <a href="#">
            <LogoTwitter />
          </a>
          <a href="#">
            <LogoEmail />
          </a>
        </div>
      </Footer>
    </Container>
  );
};
