import { PaginationButtonStyle } from '@/components/dom/paginationButton/index.style'
import { useState } from 'react';

const PaginationButton = ({ children, onClick, isDisable, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <PaginationButtonStyle 
      className={ isDisable && 'is-disable' }
      onClick={ (e) => {
        setIsActive(!isActive)
        onClick(e)
      } }
    >
      { children }
    </PaginationButtonStyle>
  )
}

export default PaginationButton;
