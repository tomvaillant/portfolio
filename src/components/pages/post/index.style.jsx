import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const PostStyle = styled.div`
  padding-top: 220px;
  margin-right: 70px;
  padding-bottom: 110px;
  ${down('sm')} {
    margin-right: 0;
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
