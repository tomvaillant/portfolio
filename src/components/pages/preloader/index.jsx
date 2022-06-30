import IconLogo from '@/components/dom/iconLogo';
import { PreloaderStyle } from '@/components/pages/preloader/index.style'
import useStore from '@/helpers/store';

const fadeInUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: "easeIn" }
  }
};

const Preloader = () => {
  const theme = useStore((s) => s.theme)

  return (
    <PreloaderStyle className={`theme-${ theme }`} initial="initial" animate="animate" exit="exit" variants={fadeInUp}>
      <IconLogo />
    </PreloaderStyle>
  )
}

export default Preloader;
