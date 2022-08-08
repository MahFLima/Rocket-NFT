import styled from "styled-components";

export const Container = styled.div`
  padding: 4.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`

export const Wrapper = styled.div`

  @media(min-width: 740px){
    display: none;
  }
`

export const Content = styled.div`
  display: none;
  @media(min-width: 740px){
    display: flex;
  }
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media(min-width: 740px){
    width: 350px;
  }

  @media(min-width: 1024px){
    width: 240px;
  }
  img{
    width: 100%;
    object-fit: cover;
    margin: 0 1rem;
  }
`;
