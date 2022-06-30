import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageTransitionStyle = styled(motion.div)`
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 999;
  .background {
    position: absolute;
    top: 50%; left: 50%;
    width: 2500%;
    max-width: inherit;
    height: 100%;
    // opacity: 0.25;
    // transition: transform 1s linear;
  }
`


// import styled from 'styled-components'

// export const PageTransitionStyle = styled.div`
//   &.page-enter-active {
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%;
//   }
//   &.page-exit {
//     ~ .wipe {
//       pointer-events: inherit;
//       .background {
//         transform: translate3D(-2%, -50%, 0);
//       }
//     }
//   }
//   &.page-exit-active {
//     ~ .wipe .background {
//       transform: translate3D(-98%, -50%, 0);
//       transition: transform 1s steps(24);
//     }
//   }
//   &.page-enter {
//     .main-appear, .secondary-appear {
//       opacity: 0;
//     }
//   }
//   &.page-enter-done {
//     .main-appear {
//       opacity: 1;
//       transition: opacity 1s ease-out 1.25s;
//     }
//     .secondary-appear {
//       opacity: 1;
//       transition: opacity 1s ease-out 2.25s;
//     }
//     ~ .wipe {
//       pointer-events: none;
//       .background {
//         transform: translate3D(-2%, -50%, 0);
//         transition: transform 1s steps(24);
//       }
//     }
//   }
// `

// export const WipeStyle = styled.div`
//   position: fixed;
//   top: 0; left: 0;
//   width: 100vw;
//   height: 100vh;
//   pointer-events: none;
//   z-index: 999;
//   .background {
//     position: absolute;
//     top: 50%; left: 50%;
//     width: 2500%;
//     max-width: inherit;
//     height: 100%;
//     transform: translate3D(-2%, -50%, 0);
//   }
// `
