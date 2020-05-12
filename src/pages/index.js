import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Mailchimp from '../components/mailchimp/mailchimp'
import GoogleForm from '../components/google-form/google-form'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Role - Every world, every story, every version of you." titleTemplate={`%s`} />
      <div className={styles.section}>
        <header className={[styles.innerContent, styles.headerContent].join(' ')}>
          <h1 className={styles.logo}>Role</h1>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <div className={`heading1 ${styles.bannerPretitle}`}>Coming soon to</div>
              <div className={`heading1 ${styles.bannerTitle}`}>Kickstarter</div>
              <a
                href="https://www.kickstarter.com/projects/role/role-a-new-kind-of-platform-for-the-rpg-community"
                className={`button is-pink ${styles.bannerButton}`}
              >
                Follow On Kickstarter!
              </a>
            </div>
          </div>
          <p className="heading2">
            We’re Creating the world’s premier online Role Playing Community. Discover new games from the most
            passionate creators, meet new friends, and adventure together. Anyone can play, Everyone is welcome.
          </p>
          <p className="heading2">
            Every world, every story, every version of you.
            <br />
            This is your Game Table. This is Role.
          </p>
          <h2 className="heading1">Welcome Home</h2>
          <div className={styles.form}>
            <div className={['heading3', styles.formHeading].join(' ')}>Join us and learn more</div>
            <Mailchimp />
          </div>
        </header>
        <div className={styles.arrow} />
      </div>

      <div className={styles.slantedSection}>
        <div className={styles.slant}>
          <div className={[styles.innerContent, styles.pillarsContent].join(' ')}>
            <h2 className={['heading1', styles.slantedHeading].join(' ')}>You can play with us</h2>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <h3 className={['heading2', styles.pillarHeading].join(' ')}>Play Something New</h3>
                <p className={styles.pillarBody}>
                  It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help
                  you discover, explore, and learn new games that meet your style.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={[styles.pillarImage, styles.imagePlay].join(' ')} />
                </div>
              </div>
              <div className={styles.pillar}>
                <h3 className={['heading2', styles.pillarHeading].join(' ')}>Fill Your Table</h3>
                <p className={styles.pillarBody}>
                  Looking for people to play with? Need a Game Master to help run your game? Our community matching
                  tools will help you find people and get playing quickly.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={[styles.pillarImage, styles.imageTable].join(' ')} />
                </div>
              </div>
              <div className={styles.pillar}>
                <h3 className={['heading2', styles.pillarHeading].join(' ')}>Role Effortlessly</h3>
                <p className={styles.pillarBody}>
                  Online play that is easy, seamless, and limitless. Role takes the complexity out of the tools, so you
                  can focus on what really matters: playing with people you love.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={[styles.pillarImage, styles.imageRole].join(' ')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={[styles.innerContent, styles.creatorsContent].join(' ')}>
          <h2 className={['heading1', styles.sectionHeading].join(' ')}>Are You a Game Creator?</h2>
          <h3 className="heading2">Join the Role Creators Program</h3>
          <p>
            Role is looking for the best new game creators who want to share their work with the world. More than just a
            marketplace - we’re invested in helping people discover new content from diverse voices, and giving everyone
            the tools to easily understand and learn new games.
          </p>
          <p>
            <strong>
              Whether you’re an indie designer or an established publisher, we want to help people connect with the
              worlds you’re dreaming of.
            </strong>
          </p>
          <GoogleForm />
        </div>
      </div>

      <div className={[styles.slantedSection, styles.slantedSectionFooter].join(' ')}>
        <div className={styles.slant}>
          <div className={[styles.innerContent, styles.pillarsContent].join(' ')}>
            <h2 className={['heading1', styles.slantedHeading].join(' ')}>Coming in 2020</h2>
            <h3 className="heading2">Your Next Great Adventure Awaits</h3>
            <p>
              Role is launching in 2020, with Early Access opening soon.
              <br />
              Be among the first to know, and follow along for future updates!
            </p>
            <div className={['heading3', styles.formHeading].join(' ')}>Join the Role Community</div>
            <Mailchimp isSlanted />
          </div>
        </div>
      </div>
    </Layout>
  )
}
