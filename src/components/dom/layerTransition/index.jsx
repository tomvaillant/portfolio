import { LayerTransitionStyle } from '@/components/dom/layerTransition/index.style'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const LayerTransition = ({ ...props }) => {
  /*
   * Datas 
   */
  const router = useRouter()
  const elRef = useRef()
  const [isActive, setIsActive] = useState(true)
  const [isTransition, setIsTransition] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  /*
   * Functions 
   */

  /**
   *  routeChangeStart -> on ajoute le composant + la transition se lance
   *  transitionEnd ->  la transition s'arrete + si routeChangeEnd alors on retire le composant
   *  routeChangeEnd -> si la transition est terminé alors on retire le composant 
   */
  const aniStart = (url) => { 
    if (url !== router.asPath) {
      setIsActive(true)
      setIsTransition(true)
      setIsEnd(false)
      setTimeout(() => { 
        setIsTransition(false)
        if (isEnd) { setIsActive(false) }
      }, 1600)
    }
  }
  const aniEnd = (url) => { 
    if (url === router.asPath) {
      setIsEnd(true)
      if (!isTransition) { setIsActive(false) }
    }
  }
  /*
   * Effects 
   */
  useEffect(() => {
    router.events.on('routeChangeStart', aniStart)
    router.events.on('routeChangeComplete', aniEnd)
    router.events.on('routeChangeError', aniEnd)
    return () => {
      router.events.off('routeChangeStart', aniStart)
      router.events.off('routeChangeComplete', aniEnd)
      router.events.off('routeChangeError', aniEnd)
    };
  }, [router])
  // useEffect(() => {
  //   if (isTransition) {
  //     setIsActive(true)
  //   }
  // }, [isTransition])

  return (
    <>
      { isActive ?
        <LayerTransitionStyle ref={elRef} className={ `${ isTransition && 'is-transition' }` } { ...props } >
          <div className="background"></div>
        </LayerTransitionStyle>
        : 
        null 
      }
    </>
  )
}

export default LayerTransition;
