import styled from 'styled-components'
import { motion } from 'framer-motion';

export const PreloaderStyle = styled(motion.div)`
  position: fixed;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  transition: inherit;
  .logo {
    width: 216px;
    height: auto;
  }
`
