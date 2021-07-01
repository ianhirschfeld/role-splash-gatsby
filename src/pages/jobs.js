import React from 'react'

import pageStyles from './pages.module.css'
import styles from './about.module.css'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Jobs" />

      <div className={pageStyles.sections}>
        <header className={pageStyles.section}>
          <div className={`${pageStyles.logo} ${pageStyles.isSmall}`}>Role</div>
        </header>
      </div>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h1 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Jobs</h1>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>About the Company</h2>
            <p className={pageStyles.leftContent}>
              Role is dedicated to building tools & game experiences for the next generation of online narrative play.
              We facilitate powerful collaborative storytelling and genuine social interaction by driving the evolution
              of digital role playing games. From high-quality video chat to code-free content creation for all, we aim
              to put people first and accelerate global imagination. Come tell your story with us!
            </p>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>About the Team</h2>
            <p className={pageStyles.leftContent}>
              We’re a small dedicated team of passionate storytellers, game creators, and digital natives. We believe in
              putting kindness first, and treating everyone as an expert. Collaboration is at the core of what we do,
              and we operate with transparency and consensus when making decisions together. We don't shy away from big
              challenges as we always believe there is an elegant solution we will find together. We love what we do,
              and we pour that joy into everything we build with our community.
            </p>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>Open Positions</h2>
            <p className={pageStyles.leftContent}>
              We’re actively hiring for two open positions. We’re especially interested in candidates who bring a
              diverse personal and professional perspective to the team. As we strive to serve an inclusive community of
              players across all cultures & identities, we want our team to reflect those communities as well. Check out
              the details on open positions below. If you're interested in joining our team, please send your resume and
              any relevant links to <a href="mailto:jobs@playrole.com">jobs@playrole.com</a>.
            </p>
            <p className={pageStyles.leftContent}>
              <strong>
                These are full-time positions. You must be a U.S. Citizen working within +/- 3 hours of Pacific Time.
              </strong>
            </p>
            <p className={pageStyles.leftContent}>
              <strong>Perks & Benefits</strong>
            </p>
            <ul className={pageStyles.leftContent}>
              <li>We are a 100% remote company. Our team members work from wherever is best for them!</li>
              <li>Equity in Role! Each employee owns a piece of the company as we grow.</li>
              <li>We help cover health, dental, vision, and life insurance.</li>
              <li>
                Untracked PTO! We believe in trusting our team to communicate and manage their own time away from work.
              </li>
            </ul>
          </div>

          <div className={styles.jobContent}>
            <h3 className={`${styles.jobTitle} teal`}>Marketing & Growth Manager</h3>
            <p>
              Help us find more people to play with! As our player community evolves, reaching new people in meaningful
              ways becomes more important than ever. We’re looking for someone who can join the team and bring a focused
              perspective to brand messaging, social media marketing, streaming, and growth. We’re looking for someone
              with experience with tech and/or gaming community growth.
            </p>
            <p>
              <strong>What you'll be doing</strong>
            </p>
            <ul>
              <li>Work with the team to conceptualize Marketing Campaigns around key features and game releases.</li>
              <li>
                Manage Social Media Marketing, Advertising Budgets, Cohort Optimization, Messaging, and Optimizing
                Creative to help us reach the right audience and bring them into our community.
              </li>
              <li>
                Develop and refine our Growth Strategy to help Role expand our player & creator base rapidly over time.
              </li>
              <li>
                Community Events planning and management, helping us create meaningful activities for our community to
                engage. This includes Game Jams, Conventions, Streaming, and more.
              </li>
            </ul>
            <p>
              <strong>What we're looking for</strong>
            </p>
            <ul>
              <li>2+ years of marketing and customer growth experience for consumer technologies and/or gaming.</li>
              <li>
                Familiarity with common social media platforms and their advertising tools: Facebook, Twitter, TikTok,
                etc.
              </li>
            </ul>
            <a
              href="mailto:jobs@playrole.com?subject=Marketing%20and%20Growth%20Manager"
              className="button"
              style={{ display: 'inline-block' }}
            >
              Apply for Marketing & Growth Manager
            </a>
          </div>

          <div className={styles.jobContent}>
            <h3 className={`${styles.jobTitle} teal`}>Frontend Software Engineer</h3>
            <p>
              Come build the tools that dreams are made of! We’re looking for a mid or senior level frontend developer
              with React experience who’s excited to dive in and create the innovative gameplay and creation systems
              this community deserves. We’re looking for someone with game and/or tech platform experience, with a
              passion for storytelling and collaborative play.
            </p>
            <p>
              <strong>What you'll be doing</strong>
            </p>
            <ul>
              <li>
                Collaborate with the product team to conceptualize new features and improvements for the Role platform.
              </li>
              <li>Develop and test features that push what it means to play tabletop RPGs online.</li>
              <li>Research new frameworks and SDKs to enhance our tech stack and workflows.</li>
            </ul>
            <p>
              <strong>What we're looking for</strong>
            </p>
            <ul>
              <li>2+ years of frontend software engineering experience.</li>
              <li>1+ years of React experience.</li>
              <li>Familiarity working with REST APIs.</li>
              <li>Familiarity with web accessibility best practices.</li>
            </ul>
            <a
              href="mailto:jobs@playrole.com?subject=Frontend%20Software%20Engineer"
              className="button"
              style={{ display: 'inline-block' }}
            >
              Apply for Frontend Software Engineer
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
