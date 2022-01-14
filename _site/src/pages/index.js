import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
    <Seo title="Tom Vaillant" />
        <Bio />
        <div className="divider" />
        <h2>Experiments & Stories</h2>
        <ol style={{ listStyle: `none` }} className="posts-index">
          {posts.map(post => {
            const title = post.frontmatter.title.toUpperCase() || post.fields.slug
            return (
              <li key={post.fields.slug}>
                <Link to={post.frontmatter.redirect ? `https://${post.frontmatter.redirect}.tomvaillant.com` : post.fields.slug} itemProp="url" target={post.frontmatter.redirect && "_blank"}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                          <span itemProp="headline">{title}</span>
                      </h2>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </Link>
              </li>
            )
          })}
        </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          redirect
        }
      }
    }
  }
`
