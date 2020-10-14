import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  ContentWrapper,
  Img,
  Main,
  Location,
  EnterApp,
} from './styles';
import logoImg from '../../images/Logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Img src={logoImg} alt="happy" />
        <Main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        <Location>
          <strong>Taquaritinga</strong>
          <span>São Paulo</span>
        </Location>
        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
