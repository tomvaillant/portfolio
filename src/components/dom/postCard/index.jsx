import { PostCardStyle } from '@/components/dom/postCard/index.style'
import IconArrow from '@/components/dom/iconArrow';

const PostCard = ({ post, ...props }) => {
  return (
    <PostCardStyle>
      <h2 className="h2">{ post.title }</h2>
      <div className="more">
        <p className="p1">{ post.description }</p>
        <IconArrow />
      </div>
    </PostCardStyle>
  )
}

export default PostCard;
