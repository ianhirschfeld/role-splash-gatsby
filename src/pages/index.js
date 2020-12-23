import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Mailchimp from '../components/mailchimp/mailchimp'
import GoogleForm from '../components/google-form/google-form'

import styles from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Role - Every story, every world, every version of you." titleTemplate={`%s`} />
      <div className={styles.section}>
        <header className={`${styles.innerContent} ${styles.headerContent}`}>
          <h1 className={styles.logo}>Role</h1>

          <div className={styles.nowOpen}>
            <h2 className={`heading1 is-centered ${styles.earlyAccessHeading}`}>Early Access is here!</h2>
            <h3 className={`heading1 is-centered ${styles.haveAccountHeading}`}>Now open to everyone</h3>
          </div>

          <div className={styles.videoWrapper}>
            <div className={styles.video}>
              <iframe
                src="https://www.youtube.com/embed/4m__7eYDWlw"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelGradient} />
            <div className={styles.panelContent}>
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
            </div>
          </div>

          <p className="heading2 is-centered">
            Welcome to a new kind of Role-Playing platform, focused on people-first imaginative group play.
          </p>
          <p className="heading2 is-centered">
            PLay your way with high-quality video chat, simple & intuitive gameplay tools, and easy code-free
            customization for playing any game you can imagine.
          </p>
          <p className="heading2 is-centered">
            Every story, every world, every version of you.
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

            <div className={styles.interface}>
              <div className={`${styles.interfaceImageWrapper} ${styles.interfaceTable}`}>
                <div className={styles.interfaceImage}>Role Interface: Table</div>
              </div>
              <h3 className="heading3 is-centered">Video play for Everyone</h3>
              <p>
                Play with your friends using crisp, high-quality, stable video chat! Role puts the best part of the game
                front-and-center: the people. Intuitive tools for managing character sheets, rolling dice, and drawing
                cards all live seamlessly within the video experience - allowing you to keep gameplay moving quickly so
                you can focus on the adventure. Add visual aids to your game via images, maps, and tokens all easily
                uploaded via your Asset Tray. With Role, you can enjoy everything you need to play - without the
                headache of cumbersome complex tools.
              </p>

              <div className={`${styles.interfaceImageWrapper} ${styles.interfaceTemplateCreator}`}>
                <div className={styles.interfaceImage}>Role Interface: Template Creator</div>
              </div>
              <h3 className="heading3 is-centered">Play Anything You Can Imagine</h3>
              <p>
                With the Role Template Creator, you can quickly and easily craft gameplay templates for any game you
                want to play - even homebrew content! Go as simple or as complex as you want with powerful code-free
                customization tools. Create automated game mechanics by linking elements together. Share your creations
                with your friends and community. Everything you create is guaranteed to work on Role, so you can focus
                on getting back to your favorite adventure.
              </p>
            </div>

            <h2 className={`heading1 is-centered ${styles.slantedHeading}`}>Coming Soon...</h2>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarImageContainer}>
                  <div className={`${styles.pillarImage} ${styles.imagePlay}`} />
                </div>
                <h3 className={`heading3 is-centered ${styles.pillarHeading}`}>Play Something New</h3>
                <p className={styles.pillarBody}>
                  It doesn’t matter if you’re a brand new player or a seasoned veteran. The Role marketplace will help
                  you discover, explore, and learn new games that meet your style.
                </p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarImageContainer}>
                  <div className={`${styles.pillarImage} ${styles.imageTable}`} />
                </div>
                <h3 className={`heading3 is-centered ${styles.pillarHeading}`}>Fill Your Table</h3>
                <p className={styles.pillarBody}>
                  Looking for people to play with? Need a Game Master to help run your game? Our community matching
                  tools will help you find people and get playing quickly.
                </p>
              </div>
            </div>

            <div className={styles.pillarSignupButton}>
              <div className={`heading3 is-centered`}>Join the Role Community</div>
              <a href="https://app.playrole.com/signup" className={`button is-pink heading2 is-centered`}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={`${styles.innerContent} ${styles.creatorsContent}`}>
          <h2 className={`heading1 is-centered ${styles.sectionHeading}`}>Are You a Game Creator?</h2>
          <h3 className={`heading3 is-centered ${styles.joinCreatorsProgramHeading}`}>
            Join the Role Creators Program
          </h3>
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
            <h2 className={`heading1 is-centered ${styles.slantedHeading} ${styles.isTeal}`}>Early Access Open Now</h2>
            <h3 className="heading3 is-centered">Your Next Great Adventure Awaits</h3>
            <br />
            <p>
              Role is currently in Early Access, now open to everyone! Want to be among the first to play?
              <br />
              <strong>Sign up and get started today:</strong>
            </p>
            <a
              className={`button is-pink heading3 is-centered ${styles.loginButton} ${styles.isSlanted}`}
              href="https://app.playrole.com/signup"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
