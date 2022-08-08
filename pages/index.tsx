import type { NextPage } from "next";
import { HomePage } from "../src/page/HomePage";
import { GlobalStyle } from "../src/styles/GlobalStyle";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage/>
    </>
  );
};

export default Home;
