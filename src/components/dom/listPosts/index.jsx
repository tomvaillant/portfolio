import { ListPostsStyle } from '@/components/dom/listPosts/index.style'
import FilterPosts from '@/components/dom/filterPosts'
import PostCard from '@/components/dom/postCard'
import PaginationPosts from '@/components/dom/paginationPosts'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const ListPosts = ({ posts = [], categories = [], maxPagination = 1, ...props }) => {
  const [listFilteredPosts, setListFilteredPosts] = useState(posts)
  const [listFilteredPostsByPage, setListFilteredPostsByPage] = useState(listFilteredPosts)
  const [listActiveFilters, setListActiveFilters] = useState([])
  const [indexPage, setIndexPage] = useState(0);
  useEffect(() => {
    let newListFilteredPosts = []
    if (listActiveFilters.length > 0) {
      newListFilteredPosts = posts.filter(post => listActiveFilters.includes(post.category))
    } else {
      newListFilteredPosts = posts
    }
    setListFilteredPosts(newListFilteredPosts)
    setIndexPage(0)
  }, [listActiveFilters])
  useEffect(() => {
    const newListFilteredPostsByPage = listFilteredPosts.slice(maxPagination * indexPage, maxPagination * indexPage + maxPagination);
    setListFilteredPostsByPage(newListFilteredPostsByPage)
  }, [indexPage, listFilteredPosts])
  return (
    <ListPostsStyle>
      { categories && categories.length > 0 && 
        <FilterPosts filters={ categories } onChange={ (newListActiveFilters) => setListActiveFilters(newListActiveFilters) } />
      }
      <div className="list-posts">
        { listFilteredPostsByPage.map((post, index) => 
          <div key={ `post-card-${index}` } className="post-card">
            { post.externalLink ?
              <a href={ post.externalLink } target="_blank" rel="noreferrer">
                <PostCard post={ post } />
              </a>
              :
                <Link href={ `/posts/${post.slug}` }>
                  <a>
                    <PostCard post={ post } />
                  </a>
                </Link>
            }
          </div>
        ) }
      </div>
      { maxPagination &&
        <>
          <hr className="separator" />
          <PaginationPosts posts={ listFilteredPosts } maxByPage={ maxPagination } indexPage={ indexPage } onChange={ (newIndexPage) => setIndexPage(newIndexPage) } />
        </>
      }

    </ListPostsStyle>
  )
}

export default ListPosts;
