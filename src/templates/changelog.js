import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import pageStyles from '../pages/pages.module.css'
import styles from '../pages/changelog.module.css'

import DoubleArrowIcon from '../images/icons/DoubleArrowIcon.svg'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default function Changelog({ data }) {
  const { frontmatter, html } = data.changelog

  return (
    <Layout>
      <SEO title="Changelog" description="Updates and improvements to the Role platform." />

      <header className={pageStyles.sections}>
        <div className={`${pageStyles.logo} ${pageStyles.isSmall}`}>Role</div>
      </header>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h1 className={`heading1 is-centered red ${pageStyles.sectionHeading1} ${styles.noMargin}`}>Changelog</h1>
            <Link to="/changelog" className={styles.back}>
              <DoubleArrowIcon />
              Back to all posts
            </Link>
          </div>
        </section>

        <section className={pageStyles.section}>
          <h2 className={`heading2 is-centered ${styles.title}`}>{frontmatter.title}</h2>
          <div className={`text-light-grey ${styles.subtitle}`}>
            v{frontmatter.version} - {frontmatter.date}
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ChangelogQuery($slug: String!) {
    changelog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        version
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`
