import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-text-base);
  width: 100vw;
  height: 100vh;
  color: var(--color-title-in-primary);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-line-in-white);
  margin-bottom: 1.2rem;
  a {
    text-decoration: none;
    height: 0;
    color: var(--color-text-complement);
  }
  h2 {
    font: 800 2.4rem Nunito;
    color: var(--color-text-title);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
  }
`;

export const LogoContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: var(--color-text-in-primary);
  padding: 1.4rem 0;
  margin: 4rem 0;
  img {
    height: 20rem;
  }
  h2 {
    font: 800 3rem Nunito;
    line-height: 4.6rem;
    margin-top: 0.8rem;
    color: var(--color-title-in-primary);
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-text-base);
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  border: 0;
  padding: 0 2.4rem;
  width: 100%;
  form {
    background: var(--color-box-base);
    width: 100%;
    max-width: 64rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding: 1.2rem;
    overflow: hidden;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  a {
    margin-top: 1rem;
    text-decoration: none;
    color: var(--color-text-complement);
  }
`;
