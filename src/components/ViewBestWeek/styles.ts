import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 1rem;

  @media (min-width: 860px){
    padding: 8.75rem 5rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  line-height: 61px;

  >strong{
    color: var(--color-logo);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 8rem;

  @media (min-width: 640px){
    flex-direction: row;
  }

  @media (min-width: 860px){
    justify-content: space-between;
    gap:0;
  }
`

export const Astronauts = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  &:first-child{
    

    @media (min-width: 860px){
      align-items: start;
      border-right: 1px solid var(--subtitle-color);
      
    }
  }

  &:last-child{
    @media (min-width: 860px){
      align-items: end;
    }
  }
`
