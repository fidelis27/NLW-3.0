import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  aside {
    @media (min-width: 700px) {
      width: 440px;
      padding: 80px;
    }

    width: 220px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  aside h2 {
    font-size: 30px;
    font-weight: 800;
    line-height: 32px;
    margin-top: 64px;
    @media (min-width: 700px) {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }
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
  aside button {
    border: 0;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    display: flex;
    align-items: center;
    height: 3.2rem;
    transition: opacity 0.2s;
    text-decoration: none;
    color: #fff;
    svg {
      margin-left: 1.6rem;
    }
  }
  aside footer strong {
    font-weight: 800;
  }
  .leaflet-container {
    z-index: 5;
  }
`;

export const Header = styled.header`
  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
      margin-top: 24px;
    }

    p,
    span {
      line-height: 28px;

      font-weight: 700;
      color: #fff;
    }
    span {
      font-weight: 800;
      margin-bottom: 5px;
    }
  }
  img {
    animation: myLogo 1.5s linear 0s infinite alternate;
    @keyframes myLogo {
      from {
        transform: translateX(0px) rotate(360deg) scale(1);
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
  /* animation: myCreateOrphanage 1.5s linear 0s infinite alternate;
  @keyframes myCreateOrphanage {
    from {
      transform: rotate(180deg) scale(1.5);
    }
    to {
      transform: rotate(0deg);
    }
  } */
`;

export const PopUp = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.286821365356445px 27.65891456604004px 41.488372802734375px
      0px #178ea6 16%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leaflet-popup-tip-container {
    display: none;
  }
`;
