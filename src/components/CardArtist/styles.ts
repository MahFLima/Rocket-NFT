import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  padding: 1rem;
  background-color: var(--card-color);

  @media (min-width: 380px){
    padding: 1.5rem 2.25rem;
    height: 150px;
  }


  &:nth-child(2) {
    background-color: var(--color-logo);
    color: white;

    > div {
      > span {
        color: white;
      }
    }
  }

  @media (min-width: 840px) {
    width: 350px;
  }

  > img {
    width: 70px;
    height: 70px;

    @media (min-width: 380px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-size: 20px;
    line-height: 24px;
  }
  > span {
    color: var(--color-logo);
  }
`;
