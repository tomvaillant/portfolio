import styled from 'styled-components'

export const PostCardStyle = styled.div`
  width: 100%;
  &:hover {
    .h2 {
      span {
        background-size:100% 2px;
        transition: background-size 0.25s ease-out;
      }
    }
    .more {
      .arrow {
        .line {
          transform: scale(0.5,1);
          transition: transform 0.25s ease-out;
        }
      }
    }
  }
  .h2 {
    position: relative;
    display: inline-block;
    max-width: 79.2%;
    margin-bottom: 13.5px;
    margin-right: 47px;
    span {
      display: inline;
      box-decoration-break:clone;
      background:linear-gradient(#000,#000) left bottom no-repeat;
      background-size:0% 2px;
      transition: background-size 0.2s ease-in;
    }
  }
  .more {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .p1 {
      margin-right: 47px;
    }
    .arrow {
      min-width: 76px;
      margin-top: 8px;
      .line {
        transform-origin: center right;
        transition: transform 0.2s ease-in;
      }
    }
  }
`
