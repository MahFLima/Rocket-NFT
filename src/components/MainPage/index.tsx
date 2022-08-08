import React from "react";
import { ViewBestArtist } from "../ViewBestArtist";
import {ViewBestWeek} from "../ViewBestWeek";
import {ViewContent} from "../ViewContent";

import { Container } from "./styles";

export const MainPage: React.FC = () => {
  return (
    <Container id="main">
      <ViewContent/>
      <ViewBestWeek/>
      <ViewBestArtist/>
    </Container>
  );
};
