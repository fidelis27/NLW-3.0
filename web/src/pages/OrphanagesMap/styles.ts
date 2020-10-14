import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  aside h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  aside p {
    line-height: 28px;
    margin-top: 24px;
  }
  aside footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    animation: myFooter 0.25s linear 1s infinite alternate;
    @keyframes myFooter {
      0% {
        margin-left: 0;
      }
      25% {
        margin-left: 2.5px;
      }
      50% {
        margin-left: 0;
      }
      75% {
        margin-left: -2.5px;
      }
      100% {
        margin-left: 0;
      }
    }
  }
  aside footer strong {
    font-weight: 800;
  }
  .leaflet-container {
    z-index: 5;
  }
  aside header img {
    animation: myLogo 1.5s linear 0s infinite alternate;
    @keyframes myLogo {
      from {
        transform: translateX(0px) rotate(360deg) scale(2);
      }
      to {
        transform: translateX(180px) rotate(0deg);
      }
    }
  }
`;
export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background: #17d6eb;
  }
  animation: myCreateOrphanage 1.5s linear 0s infinite alternate;
  @keyframes myCreateOrphanage {
    from {
      transform: rotate(180deg) scale(1.5);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
