import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const PostStyle = styled.div`
  padding-top: 163px;
  padding-bottom: 110px;
  .hero {
    margin-bottom: 50px;
  }
  .container-post {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 30px;
  }
  .container-post-content {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 0px;
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
  h1, h2, h3, p, ol, ul, a {
    margin-bottom: 13.5px;
  }
  ol, ul {
    list-style: initial;
    margin-left: 24px;
  }
  a {
    text-decoration: underline;
  }
  iframe {
    width: 100%;
    height: 50vw;
    max-height: 325px;
  }
  .container-post-content img {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`
