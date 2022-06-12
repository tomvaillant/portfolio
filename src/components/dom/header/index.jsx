import { HeaderStyle } from '@/components/dom/header/index.style'
import Link from 'next/link';
import IconLogo from '@/components/dom/iconLogo';

const Header = ({ ...props }) => {
  return (
    <HeaderStyle>
      <Link href="/">
        <a>
          <IconLogo />
        </a>
      </Link>
      <ul className="navigation">
        <li>
          <a className='a2' href="https://www.buriedsignals.com/" target="_blank" rel="noreferrer">Buried Signals</a>
        </li>
        <li>
          <Link href="/about">
            <a className='a2'>About</a>
          </Link>
        </li>
        <li>
          <a className='a2' href="https://linktr.ee/tomvaillant" target="_blank" rel="noreferrer">Connect</a>
        </li>
      </ul>
    </HeaderStyle>
  )
}

export default Header;
