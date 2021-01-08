import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import pageStyles from './pages.module.css'
import styles from './changelog.module.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      changelog: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        posts: nodes {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            version
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

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

        {data.changelog.posts.map(post => {
          const { id, html, fields, frontmatter } = post
          return (
            <section key={id} className={pageStyles.section}>
              <Link to={fields.slug}>
                <h2 className={`heading2 is-centered ${styles.title}`}>{frontmatter.title}</h2>
              </Link>
              <div className={`text-light-grey ${styles.subtitle}`}>
                v{frontmatter.version} - {frontmatter.date}
              </div>
              <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
            </section>
          )
        })}
      </div>
    </Layout>
  )
}
