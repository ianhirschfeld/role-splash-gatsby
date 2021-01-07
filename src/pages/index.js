import React from 'react'

import styles from './index.module.css'

import DoubleArrowIcon from '../images/icons/DoubleArrowIcon.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Panel from '../components/Panel'

import Mailchimp from '../components/mailchimp/mailchimp'
import GoogleForm from '../components/google-form/google-form'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Role - Every story, every world, every version of you." titleTemplate={`%s`} />

      <header className={styles.sections}>
        <section className={styles.section}>
          <h1 className={styles.logo}>Role</h1>
        </section>

        <section className={styles.section}>
          <h2 className={`heading1 is-centered green`}>Early Access is here!</h2>
          <h3 className={`heading1 is-centered ${styles.logoSubheading}`}>Now open to everyone</h3>
        </section>

        <section className={styles.section}>
          <div className={`${styles.sectionContent} ${styles.videoWrapper}`}>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/4m__7eYDWlw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <Panel className={`${styles.sectionContent} ${styles.signupPanel}`}>
            <p>
              Role is currently in Early Access, with new features being added every month. Support Role now, and
              receive a discount on your first year subsciption when Early Access ends.
            </p>
            <p>
              <em>Kickstarter Backers: check your email for an invite link.</em>
            </p>
            <a href="https://app.playrole.com/signup" className="button is-pink heading2 is-centered">
              Sign Up
            </a>
            <div className={styles.panelAccount}>
              Already have an account? <a href="https://app.playrole.com/login">Log In Here!</a>
            </div>
          </Panel>
        </section>

        <section className={styles.section}>
          <p className="heading2 is-centered">
            Welcome to a new kind of Role-Playing platform, focused on people-first imaginative group play.
          </p>
          <p className="heading2 is-centered">
            Play your way with high-quality video chat, simple & intuitive gameplay tools, and easy code-free
            customization for playing any game you can imagine.
          </p>
          <p className="heading2 is-centered">
            Every story, every world, every version of you.
            <br />
            This is your Game Table. This is Role.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className="heading1 is-centered">Welcome Home</h2>
          <div className={styles.arrow}>
            <DoubleArrowIcon />
          </div>
        </section>
      </header>

      <div className={`${styles.sections} ${styles.isWhite}`}>
        <h2 className={`heading1 is-centered red ${styles.sectionHeading}`}>You can play with us</h2>

        <section className={`${styles.section} ${styles.interface}`}>
          <div className={`${styles.interfaceImageContainer} ${styles.interfaceTable}`}>
            <div className={styles.interfaceImage}>Role Interface: Table</div>
          </div>
          <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Video play for Everyone</h3>
          <div className={styles.sectionContent}>
            <p>
              Play with your friends using crisp, high-quality, stable video chat! Role puts the best part of the game
              front-and-center: the people. Intuitive tools for managing character sheets, rolling dice, and drawing
              cards all live seamlessly within the video experience - allowing you to keep gameplay moving quickly so
              you can focus on the adventure. Add visual aids to your game via images, maps, and tokens all easily
              uploaded via your Asset Tray. With Role, you can enjoy everything you need to play - without the headache
              of cumbersome complex tools.
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.interface}`}>
          <div className={`${styles.interfaceImageContainer} ${styles.interfaceTemplateCreator}`}>
            <div className={styles.interfaceImage}>Role Interface: Template Creator</div>
          </div>
          <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Play Anything You Can Imagine</h3>
          <div className={styles.sectionContent}>
            <p>
              With the Role Template Creator, you can quickly and easily craft gameplay templates for any game you want
              to play - even homebrew content! Go as simple or as complex as you want with powerful code-free
              customization tools. Create automated game mechanics by linking elements together. Share your creations
              with your friends and community. Everything you create is guaranteed to work on Role, so you can focus on
              getting back to your favorite adventure.
            </p>
          </div>
        </section>

        <h2 className={`heading1 is-centered red ${styles.sectionHeading}`}>Coming Soon...</h2>

        <section className={styles.section}>
          <div className={styles.pillar}>
            <div className={styles.pillarImageContainer}>
              <div className={`${styles.pillarImage} ${styles.imagePlay}`} />
            </div>
            <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Play Something New</h3>
            <p>
              It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help you
              discover, explore, and learn new games that meet your style.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarImageContainer}>
              <div className={`${styles.pillarImage} ${styles.imageTable}`} />
            </div>
            <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Fill Your Table</h3>
            <p>
              Looking for people to play with? Need a Game Master to help run your game? Our community matching tools
              will help you find people and get playing quickly.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.sectionContent} ${styles.interfaceSignup}`}>
            <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Join the Role Community</h3>
            <a href="https://app.playrole.com/signup" className={`button ${styles.signupButton}`}>
              Sign Up
            </a>
          </div>
        </section>
      </div>

      <div className={styles.sections}>
        <h2 className="heading1 is-centered">Are You a Game Creator?</h2>

        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Join the Role Creators Program</h3>
            <p>
              Role is looking for the best new game creators who want to share their work with the world. More than just
              a marketplace - we’re invested in helping people discover new content from diverse voices, and giving
              everyone the tools to easily understand and learn new games.
            </p>
            <p>
              <strong>
                Whether you’re an indie designer or an established publisher, we want to help people connect with the
                worlds you’re dreaming of.
              </strong>
            </p>
            <GoogleForm />
          </div>
        </section>
      </div>

      <div className={`${styles.sections} ${styles.isWhite}`}>
        <h2 className={`heading1 is-centered teal ${styles.sectionHeading}`}>Early Access Open Now</h2>
        <section className={styles.section}>
          <h3 className={`heading3 is-centered ${styles.interfaceHeading}`}>Your Next Great Adventure Awaits</h3>
          <p>Role is currently in Early Access, now open to everyone! Want to be among the first to play?</p>
          <p>
            <strong>Sign up and get started today:</strong>
          </p>
          <a href="https://app.playrole.com/signup" className={`button ${styles.signupButton}`}>
            Sign Up
          </a>
        </section>
      </div>
    </Layout>
  )
}
