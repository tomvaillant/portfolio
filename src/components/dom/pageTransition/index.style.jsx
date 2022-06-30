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
    width: calc(100% * 25);
    min-width: calc(1440px * 25);
    max-width: inherit;
    height: 100%;
  }
`
