import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const HomeStyle = styled.div`
  padding-top: 220px;
  margin-right: 70px;
  padding-bottom: 110px;
  ${down('sm')} {
    margin-right: 0;
  }
  .h1 {
    margin-bottom: 60px;
  }
`
