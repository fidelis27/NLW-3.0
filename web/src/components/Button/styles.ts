import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secundary);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;
  :hover {
    background: var(--color-secundary-dark);
  }
`;
