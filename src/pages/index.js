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
        <header className={`${styles.innerContent} ${styles.headerContent}`}>
          <h1 className={styles.logo}>Role</h1>

          <div className={styles.nowOpen}>
            <h2 className={`heading1 is-centered ${styles.earlyAccessHeading}`}>Early Access is here!</h2>
            <h3 className={`heading1 is-centered ${styles.haveAccountHeading}`}>Now open to everyone</h3>
            <a className={`button is-pink ${styles.loginButton}`} href="https://app.playrole.com/signup">
              Play Now
            </a>
          </div>

          <p className="heading2 is-centered">
            We’re Creating the world’s premier online Role Playing Community. Discover new games from the most
            passionate creators, meet new friends, and adventure together. Anyone can play, Everyone is welcome.
          </p>
          <p className="heading2 is-centered">
            Every world, every story, every version of you.
            <br />
            This is your Game Table. This is Role.
          </p>
          <h2 className="heading1 is-centered">Welcome Home</h2>
        </header>
        <div className={styles.arrow} />
      </div>

      <div className={styles.slantedSection}>
        <div className={styles.slant}>
          <div className={`${styles.innerContent} ${styles.pillarsContent}`}>
            <h2 className={`heading1 is-centered ${styles.slantedHeading}`}>You can play with us</h2>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <h3 className={`heading2 is-centered ${styles.pillarHeading}`}>Play Something New</h3>
                <p className={styles.pillarBody}>
                  It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help
                  you discover, explore, and learn new games that meet your style.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={`${styles.pillarImage} ${styles.imagePlay}`} />
                </div>
              </div>
              <div className={styles.pillar}>
                <h3 className={`heading2 is-centered ${styles.pillarHeading}`}>Fill Your Table</h3>
                <p className={styles.pillarBody}>
                  Looking for people to play with? Need a Game Master to help run your game? Our community matching
                  tools will help you find people and get playing quickly.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={`${styles.pillarImage} ${styles.imageTable}`} />
                </div>
              </div>
              <div className={styles.pillar}>
                <h3 className={`heading2 is-centered ${styles.pillarHeading}`}>Role Effortlessly</h3>
                <p className={styles.pillarBody}>
                  Online play that is easy, seamless, and limitless. Role takes the complexity out of the tools, so you
                  can focus on what really matters: playing with people you love.
                </p>
                <div className={styles.pillarImageContainer}>
                  <div className={`${styles.pillarImage} ${styles.imageRole}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={`${styles.innerContent} ${styles.creatorsContent}`}>
          <h2 className={`heading1 is-centered ${styles.sectionHeading}`}>Are You a Game Creator?</h2>
          <h3 className="heading2 is-centered">Join the Role Creators Program</h3>
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

      <div className={`${styles.slantedSection} ${styles.slantedSectionFooter}`}>
        <div className={styles.slant}>
          <div className={`${styles.innerContent} ${styles.pillarsContent}`}>
            <h2 className={`heading1 is-centered ${styles.slantedHeading}`}>Early Access Open Now</h2>
            <h3 className="heading2 is-centered">Your Next Great Adventure Awaits</h3>
            <p>
              Role is currently in Early Access, now open to everyone! Want to be among the first to play?
              <br />
              Sign up and get started today:
            </p>
            <div className={`heading3 is-centered ${styles.formHeading}`}>Join the Role Community</div>
            <a
              className={`button is-pink ${styles.loginButton} ${styles.isSlanted}`}
              href="https://app.playrole.com/signup"
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
