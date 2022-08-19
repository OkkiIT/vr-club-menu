import styled from 'styled-components';

//@ts-ignore
import vrLogo from '../../assets/vr_logo.jpeg';
//@ts-ignore
import playStationlogo from '../../assets/playstation-logo.jpeg';

interface Props {
  inverted?: boolean;
}

export const First = styled.div<Props>`
  background-position: center;
  position: relative;
  color: ${(props) => props.theme.fontColor.activity};
  background-image: url(${(props) => (props.inverted ? vrLogo : playStationlogo)});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  & h1 {
    font-family: 'Silkscreen', cursive;
    min-width: max-content;
    overflow: hidden;
  }
`;

export const Second = styled.div<Props>`
  width: 100%;
  position: absolute;
  height: 20%;
  z-index: 3;
  transition: bottom 500ms linear, top 500ms linear;
  ${(props) => (props.inverted ? 'bottom:-20%;' : 'top:-20%;')}
`;

export const ActivityWrapper = styled.div<any>`
  flex: 1;
  overflow: hidden;
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  transition: flex 500ms;

  &:hover {
    flex: 2.4;
    transition: flex 1000ms;
  }

  &:hover ${First} {
    & h1 {
      animation: blur 300ms forwards;
      @keyframes blur {
        100% {
          filter: blur(10px);
        }
      }
    }
  }

  &:hover ${Second} {
    ${(Second) => {
      return Second.children[1].props.inverted ? 'bottom:0' : 'top:0';
    }};
    transition: bottom 400ms linear, top 400ms linear;
  }
`;

export const ButtonContainer = styled.div`
  min-width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
`;
