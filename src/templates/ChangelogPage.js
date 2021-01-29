import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import pageStyles from '../pages/pages.module.css'
import styles from './changelog.module.css'

import DoubleArrowIcon from '../images/icons/DoubleArrowIcon.svg'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class ChangelogPage extends Component {
  renderNav = () => {
    const { pageContext } = this.props
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/changelog' : `/changelog/page/${(currentPage - 1).toString()}`
    const nextPage = `/changelog/page/${(currentPage + 1).toString()}`

    return (
      <nav className={styles.pageNav}>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            <DoubleArrowIcon />
            Newer Posts
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next" className={styles.nextPage}>
            Older Posts
            <DoubleArrowIcon />
          </Link>
        )}
      </nav>
    )
  }

  render() {
    const { data } = this.props
    const { posts } = data.changelog

    return (
      <Layout>
        <SEO title="Changelog" description="Updates and improvements to the Role platform." />

        <header className={pageStyles.sections}>
          <div className={`${pageStyles.logo} ${pageStyles.isSmall}`}>Role</div>
        </header>

        <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
          <section className={pageStyles.section}>
            <div className={pageStyles.sectionContent}>
              <h1 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Changelog</h1>
            </div>
          </section>

          {posts.map(post => {
            const { id, html, fields, frontmatter } = post.node
            return (
              <section key={id} className={pageStyles.section}>
                <Link to={fields.slug}>
                  <h2 className={`heading2 is-centered ${styles.title}`}>{frontmatter.title}</h2>
                </Link>
                <div className={`text-light-grey ${styles.subtitle}`}>
                  v{frontmatter.version} - {frontmatter.date}
                </div>
                {frontmatter.featuredImage && (
                  <div className={styles.featureImage}>
                    <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
                  </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
              </section>
            )
          })}

          <section className={pageStyles.section}>
            <div className={pageStyles.sectionContent}>{this.renderNav()}</div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ChangelogPage

export const query = graphql`
  query ChangelogPageQuery($skip: Int!, $limit: Int!) {
    changelog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      posts: edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            version
            date(formatString: "MMMM Do, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 940) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
