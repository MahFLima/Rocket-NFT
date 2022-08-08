import React from "react";

import { Container, Feed, FeedResume, Paragraphs } from "./styles";

export const ViewContent: React.FC = () => {
  return (
    <Container>
      <Feed>
        <span>
          <strong>10K+</strong>
          Artes
        </span>
        <span>
          <strong>200</strong>
          Vendas
        </span>
        <span>
          <strong>20</strong>
          Artistas
        </span>
      </Feed>
      <FeedResume>
        <Paragraphs>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Congue malesuada amet
              <br /> pretium lacus. Id <a href="#">potenti diam</a> et cras odio
              <br /> viverra. Amet, velit ut hac sit. Enim ultricies
              <br /> mauris mattis nunc semper.
            </span>
            <a href="#">Lorem ipsum</a>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Congue malesuada amet
              <br /> pretium lacus. Id <a href="#">potenti diam</a> et cras odio
              <br /> viverra. Amet, velit ut hac sit. Enim ultricies
              <br /> mauris mattis nunc semper.
            </span>
            <a href="#">Lorem ipsum</a>
          </div>
        </Paragraphs>
        <img src="/assets/banner.png" alt="banner" />
      </FeedResume>
    </Container>
  );
};


