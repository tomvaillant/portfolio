import { PaginationPostsStyle } from '@/components/dom/paginationPosts/index.style'
import { useState } from 'react';
import PaginationButton from '@/components/dom/paginationButton';
import IconArrow from '@/components/dom/iconArrow'

const PaginationPosts = ({ posts, maxByPage = 1, indexPage, onChange, ...props }) => {
  const lengthPage = Math.ceil((posts.length) / maxByPage)
  const previousIsDisable = () => {
    return (indexPage + 1 == 1) ? true : false
  }
  const nextIsDisable = () => {
    return (indexPage + 1 == lengthPage) ? true : false
  }
  const previousPagePosts = () => {
    onChange(indexPage - 1)
  }
  const nextPagePosts = () => {
    onChange(indexPage + 1)
  }
  return (
    <PaginationPostsStyle>
      <PaginationButton isDisable={ previousIsDisable() } onClick={ previousPagePosts }>
        <IconArrow orientation={ "left" } />
      </PaginationButton>
      <p className="p1">{ `Page ${ indexPage + 1 }/${ lengthPage ? lengthPage : 1 }` }</p>
      <PaginationButton isDisable={ nextIsDisable() } onClick={ nextPagePosts }>
        <IconArrow />
      </PaginationButton>
    </PaginationPostsStyle>
  )
}

export default PaginationPosts;
