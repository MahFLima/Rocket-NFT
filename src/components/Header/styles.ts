import styled from "styled-components";
import {Menu} from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  background: var(--body-background);
  
  @media (min-width: 1024px) {
    padding: 3.25rem 5rem;
  }

  @media (min-width: 950px) {
    background: transparent;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 500px) {
    font-size: 2.5rem;
  }

  > strong {
    color: var(--color-logo);
  }
`;

export const NavMenu = styled.ul`
  display: none;
  gap: 3rem;

  @media (min-width: 1024px) {
    gap: 3.75rem;
  }

  @media (min-width: 950px) {
    display: flex;
  }

  > li {
    list-style: none;
    font-size: 1.125rem;

    > a {
      text-decoration: none;

      &:hover {
        color: var(--color-logo);
      }
    }
  }
`;

export const Button = styled.button`
  display: none;

  @media (min-width: 950px) {
    display: flex;
  }
  background: var(--text-color);
  color: var(--black-text);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0.8rem;

  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background: transparent;

  @media (min-width: 950px) {
    display: none;
  }
`

export const IconMenu = styled(Menu)`
  width: 30px;
  height: 30px;
`
