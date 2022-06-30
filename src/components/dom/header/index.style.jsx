import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import { motion } from 'framer-motion'

export const HeaderStyle = styled(motion.div)`
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
    gap: 23.5px;
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
      }
      &:first-child {
        display: none;
        .a2 {
          &::before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            display: block;
            width: 9px;
            height: 9px;
            border: 1px solid var(--bd-color-main);
            border-radius: 100%;
            transform-origin: bottom left;
            transform: scale3D(1, 1, 1);
            opacity: 1;
            transition: all 0.15s ease-out 0.01s;
          }
          .icon-arrow-rotate {
            position: absolute;
            right: -9px;
            bottom: 0;
            display: block;
            width: 18px;
            height: 18px;
            transform-origin: top right;
            transform: scale3D(0, 0, 0);
            opacity: 0;
            transition: all 0.15s ease-in;
          }
          &:hover {
            &::before {
              transform: scale3D(0, 0, 0);
              opacity: 0;
              transition: all 0.15s ease-in;
            }
            .icon-arrow-rotate {
              transform: scale3D(1, 1, 1);
              opacity: 1;
              transition: all 0.15s ease-out 0.01s;
            }
          }
        }
      }
      &:nth-child(2) {
        .a2 {
          &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            width: 9px;
            height: 9px;
            border: 1px solid var(--bd-color-main);
            border-radius: 100%;
            transform-origin: top right;
            transform: scale3D(1, 1, 1);
            opacity: 1;
            transition: all 0.15s ease-out 0.01s;
          }
          .icon-question {
            position: absolute;
            right: -4.5px;
            bottom: 0;
            display: block;
            width: 11px;
            height: 18px;
            transform-origin: bottom left;
            transform: scale3D(0, 0, 0);
            opacity: 0;
            transition: all 0.15s ease-in;
          }
          &:hover {
            &::before {
              transform: scale3D(0, 0, 0);
              opacity: 0;
              transition: all 0.15s ease-in;
            }
            .icon-question {
              transform: scale3D(1, 1, 1);
              opacity: 1;
              transition: all 0.15s ease-out 0.01s;
            }
          }
        }
      }
      &:last-child {
        .a2 {
          &::before, &::after {
            content: '';
            position: absolute;
            right: 0;
            display: block;
            width: 9px;
            height: 9px;
            border: 1px solid var(--bd-color-main);
            border-radius: 100%;
            transition: transform 0.1s ease-in;
          }
          &::before {
            top: 0;
          }
          &::after {
            bottom: 0;
          }
          &:hover {
            &::before {
              transform: translate3D(0, 25%, 0);
              transition: transform 0.15s ease-out;
            }
            &::after {
              content: '';
              transform: translate3D(0, -25%, 0);
              transition: transform 0.15s ease-out;
            }
          }
        }
      }
    }
  }
`
