import { allPosts } from 'contentlayer/generated';
import pick from '@/helpers/pick';
import Home from '../components/pages/home';
import Header from '@/components/dom/header';
import PageTransition from '@/components/dom/pageTransition';
import Dom from '@/components/layout/dom';

const Page = (props) => {
  return (
    <>
      <Dom>
        <Header />
        <Home posts={ props.posts } />
        <PageTransition />
      </Dom>
    </>
  )
}

export default Page

export async function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'publishedAt',
        'description',
        'image',
        'category',
        'externalLink',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return { props: { posts } };
}
