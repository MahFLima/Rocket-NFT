import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 30% 50% 20%;
    padding: 0 4rem;
    text-align: start;
    gap: 0;
  }

  align-items: center;
`;

export const FeedMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding: 1rem;

  @media (min-width: 1024px) {
    order: -1;
    margin-right: 2.5rem;
    padding: 0;
  }

  > p {
    font-size: 1.125rem;
  }

  > section {
    display: flex;
    align-items: end;
    text-align: start;

    > span {
      display: flex;
      flex-direction: column;
      font-size: 1.125rem;
      padding-left: 6px;
    }
  }
`;
export const FeedNFT = styled.div`
  display: flex;
  padding: 0 1rem;

  > h1 {
    font-size: 2.5rem;

    @media (min-width: 640px){
      font-size: 3.125rem;
    }

    > strong {
      color: var(--color-logo);
    }
  }
`;
