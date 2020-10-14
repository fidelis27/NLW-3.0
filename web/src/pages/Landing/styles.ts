import { Link } from 'react-router-dom';
import styled from 'styled-components';
import landingL from '../../images/landing.svg';

export const Container = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 580px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingL}) no-repeat 80% center;
`;

export const Img = styled.img``;

export const Main = styled.main`
  max-width: 350px;
  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;

  text-align: right;

  strong {
    font-weight: 800;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  height: 80px;
  width: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  :hover {
    background: #96feff;
  }
`;
