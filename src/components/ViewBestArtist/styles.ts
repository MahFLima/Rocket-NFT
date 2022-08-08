import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  @media (min-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > a {
    margin: 3rem 0;
    text-decoration: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.375rem;

    > img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 380px) {
    margin-bottom: 7.5rem;
  }
  > strong {
    color: var(--color-logo);
  }
`;

export const GroupArtists = styled.div`
  display: none;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6.25rem;

  @media (min-width: 840px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  @media (min-width: 840px){
    display: none;
  }
`;
