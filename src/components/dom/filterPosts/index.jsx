import { FilterPostsStyle } from '@/components/dom/filterPosts/index.style'
import FilterButton from '@/components/dom/filterButton'
import { useState, useEffect } from 'react';

const FilterPosts = ({ filters, onChange, ...props }) => {
  const [listActiveFilters, setListActiveFilters] = useState([])
  useEffect(() => {
    onChange(listActiveFilters)
  }, [listActiveFilters])
  return (
    <FilterPostsStyle>
      { filters.map(filter => 
        <FilterButton 
          key={ `filter-button-${filter}` } 
          text={ filter }
          onClick={ (e) => {
            let oldListActiveFilters = listActiveFilters;
            let newListActiveFilters = [];
            const valueTarget = e.target.innerText.toLowerCase();
            if (!oldListActiveFilters.includes(valueTarget)) {
              newListActiveFilters = [...oldListActiveFilters, valueTarget]
            } else {
              newListActiveFilters = oldListActiveFilters.filter(item => item !== valueTarget)
            }
            setListActiveFilters(newListActiveFilters)
          } }
        />
      ) }
    </FilterPostsStyle>
  )
}

export default FilterPosts;
