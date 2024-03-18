import { HeaderStyle } from '@/components/dom/header/index.style'
import Link from 'next/link'
import IconLogo from '@/components/dom/iconLogo'
import IconArrowRotate from '../iconArrowRotate'
import IconQuestion from '../iconQuestion'

const fadeInUp = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 1.05,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 1.3, ease: 'easeOut' },
  },
}

const Header = ({ ...props }) => {
  return (
    <HeaderStyle initial='initial' animate='animate' variants={fadeInUp}>
      <Link href='/'>
        <a>
          <IconLogo />
        </a>
      </Link>
      <ul className='navigation'>
        {/* <li>
          <a className='a2' href="https://www.buriedsignals.com/" target="_blank" rel="noreferrer">
            Buried Signals
            <IconArrowRotate />
          </a>
        </li> */}
        <li>
          <a
            className='a2'
            href='https://studio.buriedsignals.com/'
            target='_blank'
            rel='noreferrer'
          >
            Studio
            <IconArrowRotate />
          </a>
        </li>
        <li>
          <Link href='/about'>
            <a className='a2'>
              About
              <IconQuestion />
            </a>
          </Link>
        </li>
      </ul>
    </HeaderStyle>
  )
}

export default Header
