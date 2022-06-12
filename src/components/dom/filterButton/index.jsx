import { FilterButtonStyle } from '@/components/dom/filterButton/index.style'
import { useState } from 'react';

const FilterButton = ({ text, onClick, ...props }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <FilterButtonStyle 
      className={ isActive && 'is-active' }
      onClick={ (e) => {
        setIsActive(!isActive)
        onClick(e)
      } }
    >
      { text }
    </FilterButtonStyle>
  )
}

export default FilterButton;
