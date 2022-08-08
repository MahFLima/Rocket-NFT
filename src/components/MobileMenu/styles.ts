import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 4rem 0;
  background: var(--body-background);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Button = styled.button`
  max-width: 12.5rem;
  margin-left: 2rem;
  background: var(--text-color);
  color: var(--black-text);
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  >li{
    list-style: none;
    border-bottom: 1px solid #5a5757;
    padding: 1.5rem;
    >a{
      text-decoration: none;
      font-size: 1.5rem;
      color: #5a5757;

      &:hover {
        color: var(--color-logo);
      }
    }
  }
` 
