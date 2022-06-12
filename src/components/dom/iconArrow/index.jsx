import { ArrowStyle } from '@/components/dom/iconArrow/index.style'

const IconArrow = ({ orientation = "right", ...props }) => {
  return (
    <ArrowStyle className="arrow" orientation={ orientation } width="76" height="8" viewBox="0 0 76 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M74 3.5C73.7239 3.5 73.5 3.72386 73.5 4C73.5 4.27615 73.7239 4.5 74 4.5L74 3.5ZM75.3536 4.35355C75.5488 4.15829 75.5488 3.84171 75.3536 3.64645L72.1716 0.464474C71.9763 0.269212 71.6597 0.269213 71.4645 0.464476C71.2692 0.659738 71.2692 0.976321 71.4645 1.17158L74.2929 4L71.4645 6.82844C71.2692 7.0237 71.2692 7.34028 71.4645 7.53554C71.6597 7.73081 71.9763 7.7308 72.1716 7.53554L75.3536 4.35355ZM74 4.5L75 4.5L75 3.5L74 3.5L74 4.5Z" fill="black"/>
      <path className="line" d="M1 4H74.6605" stroke="black" strokeLinecap="round"/>
    </ArrowStyle>
  )
}


export default IconArrow
