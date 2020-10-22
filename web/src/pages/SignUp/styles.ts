import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #ebf2f5;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    input {
      width: 100%;
    }
    a {
      width: 100%;
      margin-bottom: 6rem;
      height: 3.2rem;
      transition: opacity 0.2s;
      text-decoration: none;
      color: var(--color-text-in-primary);
    }
    a:hover {
      opacity: 0.6;
    }
  }
`;
export const Title = styled.label`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 34px;
  margin-bottom: 3rem;
  color: var(--color-text-in-primary);
`;

export const SubTitle = styled.label`
  width: 100%;
  @media (min-width: 700px) {
    max-width: 40.2rem;
    align-self: flex-start;
  }
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 36px;
  margin-bottom: 2rem;
  color: var(--color-text-in-primary);
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #29b6d1;
  img {
    padding-top: 1rem;
    width: 50%;
    @media (min-width: 700px) {
      width: 60%;
    }
  }
  h2 {
    color: var(--color-title-in-primary);
    padding: 1rem;
    @media (min-width: 700px) {
      padding: 1.5rem;
    }
  }
`;
