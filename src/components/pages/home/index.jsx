import { HomeStyle } from '@/components/pages/home/index.style'
import ListPosts from '@/components/dom/listPosts';

const datas = {
  title: "Hello, I am Tom.",
  description: "Currently visualising thoughts and working as a creative producer in digital and film. I run Buried Signals, where we curate visual, investigative and immersive experiments in journalism.",
  allPosts: [
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "1 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "2 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "3 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "4 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "5 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "6 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "7 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "8 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "9 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "10 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "11 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "12 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "13 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "14 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
    {
      slug: "/posts/a-xmas-experiment",
      category: "experiments",
      title: "15 A Xmas experiment",
      description: "A Christmas scene baked in Blender with D3 chart overlays.",
      externalLink: "https://google.com"
    },
    {
      slug: "/posts/interstella-chapter-1",
      category: "articles",
      title: "16 Interstella, Chapter 1",
      description: "The Ambassador’s Daugther.",
      externalLink: undefined
    },
  ],
  allCategories : ["articles", "experiments"]
}

const Home = ({ posts, ...props }) => {
  return (
    <HomeStyle>
      <div className="container1">
        <h1 className="h1">{ datas.title }</h1>
        <p className="p1">{ datas.description }</p>
        <hr className="separator" />
        <ListPosts posts={ posts } categories={ datas.allCategories } maxPagination={ 7 } />
      </div>
    </HomeStyle>
  )
}

export default Home;
