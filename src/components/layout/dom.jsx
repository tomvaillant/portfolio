import { DomStyle } from '@/components/layout/dom.style'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children, className }) => {
  const ref = useRef(null)
  const theme = useStore((s) => s.theme)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return <DomStyle ref={ref} className={`global theme-${ theme } ${ className ? className : '' }`}>{children}</DomStyle>
}

export default Dom
