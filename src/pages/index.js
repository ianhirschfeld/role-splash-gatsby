import React from 'react'

import pageStyles from './pages.module.css'
import styles from './index.module.css'

import DoubleArrowIcon from '../images/icons/DoubleArrowIcon.svg'

import Layout from '../components/Layout'
import Panel from '../components/Panel'
import SEO from '../components/seo'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Role - Every story, every world, every version of you." titleTemplate={`%s`} />

      <header className={pageStyles.sections}>
        <section className={pageStyles.section}>
          <h1 className={pageStyles.logo}>Role</h1>
        </section>

        <section className={pageStyles.section}>
          <h2 className={`heading1 is-centered green`}>Early Access is here!</h2>
          <h3 className={`heading1 is-centered ${pageStyles.logoSubheading}`}>Now open to everyone</h3>
        </section>

        <section className={pageStyles.section}>
          <div className={`${pageStyles.sectionContent} ${styles.videoWrapper}`}>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/4m__7eYDWlw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Welcome to Role"
              ></iframe>
            </div>
          </div>

          <Panel className={`${pageStyles.sectionContent} ${styles.signupPanel}`}>
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
              Already have an account?{' '}
              <a href="https://app.playrole.com/login" className="teal">
                Log In Here!
              </a>
            </div>
          </Panel>
        </section>

        <section className={pageStyles.section}>
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

        <section className={pageStyles.section}>
          <h2 className="heading1 is-centered">Welcome Home</h2>
          <div className={styles.arrow}>
            <DoubleArrowIcon />
          </div>
        </section>
      </header>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <h2 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>You Can Play With Us</h2>

        <section className={`${pageStyles.section} ${styles.interface}`}>
          <div className={`${styles.interfaceImageContainer} ${styles.interfaceTable}`}>
            <div className={styles.interfaceImage}>Role Interface: Table</div>
          </div>
          <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Video Play for Everyone</h3>
          <div className={pageStyles.sectionContent}>
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

        <section className={`${pageStyles.section} ${styles.interface}`}>
          <div className={`${styles.interfaceImageContainer} ${styles.interfaceTemplateCreator}`}>
            <div className={styles.interfaceImage}>Role Interface: Template Creator</div>
          </div>
          <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Play Anything You Can Imagine</h3>
          <div className={pageStyles.sectionContent}>
            <p>
              With the Role Template Creator, you can quickly and easily craft gameplay templates for any game you want
              to play - even homebrew content! Go as simple or as complex as you want with powerful code-free
              customization tools. Create automated game mechanics by linking elements together. Share your creations
              with your friends and community. Everything you create is guaranteed to work on Role, so you can focus on
              getting back to your favorite adventure.
            </p>
          </div>
        </section>

        <h2 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Coming Soon...</h2>

        <section className={pageStyles.section}>
          <div className={styles.pillar}>
            <div className={styles.pillarImageContainer}>
              <div className={`${styles.pillarImage} ${styles.imagePlay}`} />
            </div>
            <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Play Something New</h3>
            <p>
              It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help you
              discover, explore, and learn new games that meet your style.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarImageContainer}>
              <div className={`${styles.pillarImage} ${styles.imageTable}`} />
            </div>
            <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Fill Your Table</h3>
            <p>
              Looking for people to play with? Need a Game Master to help run your game? Our community matching tools
              will help you find people and get playing quickly.
            </p>
          </div>
        </section>

        <section className={pageStyles.section}>
          <div className={`${pageStyles.sectionContent} ${styles.interfaceSignup}`}>
            <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Join the Role Community</h3>
            <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
              Sign Up
            </a>
          </div>
        </section>
      </div>

      <div className={pageStyles.sections}>
        <h2 className="heading1 is-centered">Are You a Game Creator?</h2>

        <section className={pageStyles.section}>
          <div className={pageStyles.sectionContent}>
            <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Join the Role Creators Program</h3>
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

            <form
              name="creators"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/creators/thank-you"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="creators" />
              <input
                className={styles.input}
                type="text"
                placeholder="First name"
                aria-label="First name"
                name="first_name"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Last name"
                aria-label="Last name"
                name="last_name"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Email address"
                aria-label="Email address"
                name="email"
              />
              <input className={styles.input} type="text" placeholder="Website" aria-label="Website" name="website" />
              <textarea
                className={styles.textarea}
                placeholder="Tell us more about you and what you are making..."
                aria-label="Tell us more about you and what you are making..."
                name="description"
              />
              <input type="submit" value="Contact Us" className={`button ${styles.submitButton}`} />
            </form>
          </div>
        </section>
      </div>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <h2 className={`heading1 is-centered teal ${pageStyles.sectionHeading1}`}>Early Access Open Now</h2>
        <section className={pageStyles.section}>
          <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Your Next Great Adventure Awaits</h3>
          <p>Role is currently in Early Access, now open to everyone! Want to be among the first to play?</p>
          <p>
            <strong>Sign up and get started today:</strong>
          </p>
          <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
            Sign Up
          </a>
        </section>
      </div>
    </Layout>
  )
}
