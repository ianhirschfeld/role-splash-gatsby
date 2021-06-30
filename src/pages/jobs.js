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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend quam ipsum, vel pretium dolor
              posuere vel. Integer elementum neque elit, non blandit lacus ullamcorper eget. Vestibulum finibus finibus
              condimentum. Etiam ullamcorper sed metus vel interdum. Maecenas vitae laoreet felis, a venenatis justo.
              Nunc porttitor egestas enim, at sagittis arcu facilisis non. Pellentesque dolor eros, imperdiet ut ligula
              vitae, egestas porta ligula. Etiam a odio vitae ex pellentesque porta non eget est.
            </p>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h2 className={`heading2 is-centered ${pageStyles.sectionHeading2}`}>About the Team</h2>
            <p className={pageStyles.leftContent}>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer et
              semper orci. Aenean iaculis at dui eget ornare. Morbi turpis lacus, finibus mollis mi vel, lacinia
              ultrices mauris. Nulla hendrerit metus dolor, ac aliquam justo dignissim non. Vivamus ut odio justo. Nulla
              facilisi. Quisque pellentesque justo nec tellus euismod, vitae sodales dolor lacinia. Integer lobortis non
              dolor non venenatis. Donec at semper felis. Nunc vitae augue dictum, ultricies sem vitae, laoreet turpis.
              In vitae blandit odio, id mattis ex.
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
              the details of the open positions below and send us an email to{' '}
              <a href="mailto:jobs@playrole.com">jobs@playrole.com</a> with your resume and and any relevant links.
            </p>
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
              <li>Fill out...</li>
            </ul>
            <p>
              <strong>Perks & Benefits</strong>
            </p>
            <ul>
              <li>We are a 100% remote company. Work from wherever you want.</li>
              <li>Equity in Role! Own a piece of the company as we grow.</li>
              <li>Health, dental, vision, and life insurance.</li>
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
            <h3 className={`${styles.jobTitle} teal`}>Software Engineer</h3>
            <p>
              Come build the tools that dreams are made of! We’re looking for a frontend developer with React experience
              who’s excited to dive in and create the innovative gameplay and creation systems this community deserves.
              We’re looking for someone with game and/or tech platform experience, with a passion for storytelling and
              collaborative play.
            </p>
            <p>
              <strong>What you'll be doing</strong>
            </p>
            <ul>
              <li>
                Collaborate with the product team to conceptualize new features and improvements for the Role platform.
              </li>
              <li>Develop and test features that push what it means to play tabletop RPGs online.</li>
              <li>Researching new frameworks and SDKs to enhance our tech stack and workflows.</li>
            </ul>
            <p>
              <strong>What we're looking for</strong>
            </p>
            <ul>
              <li>2+ years of software engineering frontend experience.</li>
              <li>1+ years of React experience.</li>
              <li>Familiarity working with REST APIs.</li>
              <li>Familiarity with web accessibility best practices.</li>
              <li>U.S. Citizens working +/- 3 hours of Pacific Time.</li>
            </ul>
            <p>
              <strong>Perks & Benefits</strong>
            </p>
            <ul>
              <li>We are a 100% remote company. Work from wherever you want.</li>
              <li>Equity in Role! Own a piece of the company as we grow.</li>
              <li>Health, dental, vision, and life insurance.</li>
            </ul>
            <a
              href="mailto:jobs@playrole.com?subject=Software%20Engineer"
              className="button"
              style={{ display: 'inline-block' }}
            >
              Apply for Software Engineer
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
