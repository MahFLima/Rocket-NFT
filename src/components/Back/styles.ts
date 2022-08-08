import styled, { css } from "styled-components";
import { Instagram, Youtube, Twitter } from "@styled-icons/boxicons-logos";
import { Email } from "@styled-icons/material-rounded";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--card-color);
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.75rem 2rem;
  border-bottom: 1px solid #5a5757;

  @media (min-width: 640px){
    padding: 3.75rem 5rem;
  }

  > h1 {
    font-size: 2rem;
    line-height: 49px;

    > strong {
      color: var(--color-logo);
    }
  }

  > a {
    width: 5rem;
    height: 5rem;
    background: var(--color-logo);
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1024px){
    flex-direction: row;
  }
`;
export const FormEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 4rem 5rem;

  @media(min-width: 1024px){
    border-right: 1px solid #5a5757;
  }

  > p {
    font-size: 1.875rem;
    line-height: 37px;

    > span {
      color: var(--color-logo);
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 560px){
      flex-direction: row;
      gap: 0;
    }
    > input {
      background: var(--color-input);
      width: 100%;
      border: none;
      padding: 1.25rem;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;

      @media(min-width: 1024px){
        width: 280px;
      }
    }
    > button {
      width: 7.5rem;
      color: black;
      padding: 1.25rem 1.5rem;
      cursor: pointer;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 24px;
    }
  }
`;
export const NavOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;

  @media(min-width: 640px){
    justify-content: space-around;
    gap: 0;
  }

  > div {
    display: flex;
    flex-direction: column;

    >strong{
      color: white;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 1rem;
    }

    > a {
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      color: var(--subtitle-color);
      margin-bottom: 0.8rem;

      &:hover{
        color: var(--text-color);
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3.75rem 5rem;
  border-top: 1px solid var(--subtitle-color);

  @media(min-width: 740px){
    flex-direction: row;
    justify-content: space-between;
  }

  >a{
  color: var(--subtitle-color);
  }

  >div{
    display: flex;
    gap: 5rem;
  }
`;

const IconCss = css`
  width: 1.875rem;
  height: 1.875rem;
  text-decoration: none;
  color: var(--subtitle-color);
`;

export const LogoInstagram = styled(Instagram)`
  ${IconCss}
`;
export const LogoYoutube = styled(Youtube)`
  ${IconCss}
`;
export const LogoTwitter = styled(Twitter)`
  ${IconCss}
`;
export const LogoEmail = styled(Email)`
  ${IconCss}
`;
