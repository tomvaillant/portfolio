import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const HeaderStyle = styled.div`
  position: fixed;
  top: 37.5px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 60px;
  ${down('xl')} {
    position: absolute;
    padding: 0 30px;
  }
  ${down('md')} {
    padding: 0 30px;
  }
  ${down('sm')} {
    flex-direction: column;
    gap: 13.5px;
  }
  .navigation {
    display: flex;
    li {
      &:not(:last-child) {
        margin-right: 45px;
        ${down('md')} {
          margin-right: 13.5px;
        }
      }
      .a2 {
        position: relative;
        padding-right: 14px;
        &::before, &::after {
          position: absolute;
          right: 0;
          display: block;
          width: 9px;
          height: 9px;
          border: 1px solid var(--bd-color-main);
          border-radius: 100%;
        }
        &::before {
          top: 0;
        }
        &::after {
          bottom: 0;
        }
      }
      &:first-child {
        .a2 {
          &::after {
            content: '';
          }
        }
      }
      &:nth-child(2) {
        .a2 {
          &::before {
            content: '';
          }
        }
      }
      &:last-child {
        .a2 {
          &::before, &::after {
            content: '';
          }
        }
      }
    }
  }
`
