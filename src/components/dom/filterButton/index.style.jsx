import styled from 'styled-components'

export const FilterButtonStyle = styled.button`
  position: relative;
  padding-left: calc(9px + 12px);
  text-transform: capitalize;
  &:not(:last-child) {
    margin-right: 42px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 9px;
    height: 9px;
    border: 1px solid #000000;
    border-radius: 100%;
    transform: translate3D(0, -50%, 0);
  }
  &.is-active {
    &::before {
      content: url("data:image/svg+xml,%3Csvg width='8' height='11' viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.59473 1.31055C4.59473 1.0344 4.37087 0.810547 4.09473 0.810547C3.81858 0.810547 3.59473 1.0344 3.59473 1.31055L4.59473 1.31055ZM3.74117 10.4512C3.93644 10.6465 4.25302 10.6465 4.44828 10.4512L7.63026 7.26921C7.82552 7.07395 7.82552 6.75737 7.63026 6.5621C7.435 6.36684 7.11842 6.36684 6.92315 6.5621L4.09473 9.39053L1.2663 6.5621C1.07104 6.36684 0.754455 6.36684 0.559193 6.5621C0.363931 6.75737 0.363931 7.07395 0.559193 7.26921L3.74117 10.4512ZM3.59473 1.31055L3.59473 10.0976L4.59473 10.0976L4.59473 1.31055L3.59473 1.31055Z' fill='black'/%3E%3C/svg%3E%0A");
      top: 0;
      border: inherit;
      transform: inherit;
    }
  }
`
