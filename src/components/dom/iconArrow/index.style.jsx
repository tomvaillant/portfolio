import styled, { css } from 'styled-components'

export const ArrowStyle = styled.svg`
  transform: rotate3D(0, 0, 1, ${
    (props) => {
      switch (props.orientation) {
        case "top":
          return -90
        case "bottom":
          return 90
        case "left":
          return 180
        case "rigth": default:
          return 0
      }
    }
  }deg);
  path {
    &:first-child {
      fill: var(--bd-color-main);
    }
    &:last-child {
      stroke: var(--bd-color-main);
    }
  }
  .line {
    transform-origin: ${
      (props) => {
        switch (props.orientation) {
          case "top":
            return "bottom"
          case "bottom":
            return "top"
          case "left":
            return "right"
          case "rigth": default:
            return "left"
        }
      }
    };
  }
`
