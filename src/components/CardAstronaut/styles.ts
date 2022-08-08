import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 37px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.75rem;

    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  > p {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 24px;
    color: var(--subtitle-color);
    display: flex;
    justify-content: space-between;

    > span {
      color: var(--color-logo);
    }
  }

  > img {
    width: 15rem;
    height: 12.5rem;
    object-fit: cover;
    margin-top: 1.625rem;

    @media (min-width: 860px){
      width: 20rem;
    }
  }
`;
