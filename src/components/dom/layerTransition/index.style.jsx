import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const LayerTransitionStyle = styled(animated.div)`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
  &.is-transition {
    .background {
      animation: cd-sprite 0.8s steps(24) 0s 2 alternate forwards;
    }
  }
  .background {
    position: absolute;
    top: 50%; left: 50%;
    width: 2500%;
    height: 100%;
    background: url("./img/ink.png") no-repeat 0 0;
    background-size: 100% 100%;
    transform: translate3D(-2%, -50%, 0);
  }
  @keyframes cd-sprite {
    0% {
      transform: translateY(-50%) translateX(-2%);
    }
    100% {
      transform: translateY(-50%) translateX(-98%);
    }
  }
`
