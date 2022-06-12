import styled from 'styled-components'

export const PaginationPostsStyle = styled.div`
  display: flex;
  justify-content: center;
  .p1 {
    margin-left: 40px;
    margin-right: 40px;
  }
  .arrow {
    min-width: 76px;
    .line {
      transform-origin: center right;
      transition: transform 0.2s ease-in;
    }
    &:hover {
      .line {
        transform: scale(0.5,1);
        transition: transform 0.25s ease-out;
      }
    }
  }
`

// &:hover {
//   .h2 {
//     &::before {
//       width: calc(100% + 18px);
//       transition: width 0.25s ease-out;
//     }
//   }
//   .more {
//     .arrow {
//       .line {
//         transform: scale(0.5,1);
//         transition: transform 0.25s ease-out;
//       }
//     }
//   }
// }
// .h2 {
//   position: relative;
//   display: inline-block;
//   max-width: 79.2%;
//   margin-bottom: 13.5px;
//   margin-right: 47px;
//   &::before {
//     content: '';
//     position: absolute;
//     left: -9px;
//     display: block;
//     width: 0;
//     height: 100%;
//     background: linear-gradient(89.32deg, #CBC8C6 0%, #E9E6E3 100%);
//     z-index: -1;
//     transition: width 0.2s ease-in;
//   }
// }
// .more {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   .p1 {
//     margin-right: 47px;
//   }
//   .arrow {
//     min-width: 76px;
//     margin-top: 8px;
//     .line {
//       transform-origin: center right;
//       transition: transform 0.2s ease-in;
//     }
//   }
// }
