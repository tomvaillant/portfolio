import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const PostStyle = styled.div`
  padding-top: 163px;
  margin-right: 70px;
  padding-bottom: 110px;
  ${down('sm')} {
    margin-right: 0;
  }
  .back {
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 13.5px 0;
    text-decoration: inherit;
    svg {
      margin-right: 13.5px;
      .line {
        transform: scale(0.5,1);
        transition: transform 0.2s ease-in;
      }
    }
    span {
      transform: translate3D(-36px, 0, 0);
      transition: transform 0.2s ease-in;
    }
    &:hover {
      svg {
        .line {
          transform: scale(0.4,1);
          transition: transform 0.25s ease-out;
        }
      }
      span {
        transform: translate3D(-44px, 0, 0);
        transition: transform 0.25s ease-out;
      }
    }
  }
  h1, h2, h3, p, ol, ul, img, a {
    margin-bottom: 13.5px;
  }
  ol, ul {
    list-style: initial;
    margin-left: 24px;
  }
  a {
    text-decoration: underline;
  }
`
