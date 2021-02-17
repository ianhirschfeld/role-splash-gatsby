import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import pageStyles from '../pages/pages.module.css'
import styles from './changelog.module.css'

import DoubleArrowIcon from '../images/icons/DoubleArrowIcon.svg'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class ChangelogPost extends Component {
  render() {
    const { data } = this.props
    const { frontmatter, html } = data.changelog
    const { date, featuredImage, title, version } = frontmatter

    return (
      <Layout>
        <SEO title={`Changelog: ${title}`} description="Updates and improvements to the Role platform." />

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
            <h2 className={`heading2 is-centered ${styles.title}`}>{title}</h2>
            <div className={`text-light-grey ${styles.subtitle}`}>
              v{version} - {date}
            </div>
            {featuredImage && (
              <div className={styles.featureImage}>
                <Img fluid={featuredImage.childImageSharp.fluid} />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: html }} className={styles.content} />
          </section>
        </div>
      </Layout>
    )
  }
}

export default ChangelogPost

export const query = graphql`
  query ChangelogQuery($slug: String!) {
    changelog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`
