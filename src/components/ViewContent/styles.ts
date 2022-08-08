import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--subtitle-color);

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 20% 80%;
  }
`;

export const Feed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  text-align: center;
  gap: 2rem;
  border-bottom: 1px solid var(--subtitle-color);

  @media (min-width: 1024px){
    padding: 7rem 0;
    flex-direction: column;
    border-right: 1px solid var(--subtitle-color);
    border-bottom: none;
    gap: 4;
  }

  > span {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    color: var(--subtitle-color);

    > strong {
      font-weight: 600;
      font-size: 2rem;
      line-height: 61px;

      color: white;

      @media(min-width: 640px){
        font-size: 3rem;
      }
    }
  }
`;
export const FeedResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`;

export const Paragraphs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2.5rem 0;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin-top: 4rem;
    padding: 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    gap: 1rem; 

    > span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 22px;

      > a {
        color: var(--color-logo);
      }
    }
  }
`;
