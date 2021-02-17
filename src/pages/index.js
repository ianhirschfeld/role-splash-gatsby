import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

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
          <h2 className={`heading1 is-centered ${pageStyles.logoSubheading}`}>
            Welcome to a new kind of Role-Playing platform, focused on Video-First group play & easy Game creation.
          </h2>
        </section>

        <section className={pageStyles.section}>
          <div className={styles.bannerContainer}>
            <div className={`${styles.imageContainer} ${styles.bannerImageContainer}`}>
              <div
                className={`${styles.image} ${styles.bannerImage}`}
                title="Role Interface: Table - Video Grid & Character Sheet"
              >
                Role Interface: Table - Video Grid & Character Sheet
              </div>
            </div>
          </div>

          <Panel className={`${styles.bannerContainer} ${styles.signupPanel}`}>
            <p className="heading2">Role is currently in Early Access</p>
            <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
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
          <div className="heading1 is-centered">Welcome Home</div>
          <div className={styles.arrow}>
            <DoubleArrowIcon />
          </div>
        </section>
      </header>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <h2 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>What is Role?</h2>

        <section className={pageStyles.section}>
          <p>
            Role is a better way to play your favorite RPGs online. From D&D to indie games, Role puts the best part of
            playing front-and-center: the people! Intuitive tools for for playing & creating games all live seamlessly
            in a clear and powerful interface. Keep prep time low and gameplay breezy.
          </p>
          <p>
            <strong>
              With Role, you can enjoy everything you need to play - without the headache of cumbersome complex tools.
            </strong>
          </p>

          <div className={styles.imageGrid}>
            <div className={`box-shadow ${styles.imageContainer} ${styles.imageGridPrimary}`}>
              <div
                className={`${styles.image} ${styles.imageGrid1}`}
                title="Role Interface: Table - Dice Roller & Character Sheet"
              >
                Role Interface: Table - Dice Roller & Character Sheet
              </div>
            </div>
            <div className={`box-shadow ${styles.imageContainer} ${styles.imageGridSecondary}`}>
              <div
                className={`${styles.image} ${styles.imageGrid2}`}
                title="Role Interface: Table - Maps, Tokens, & Drawing"
              >
                Role Interface: Table - Maps, Tokens, & Drawing
              </div>
            </div>
            <div className={`box-shadow ${styles.imageContainer} ${styles.imageGridSecondary}`}>
              <div className={`${styles.image} ${styles.imageGrid3}`} title="Role Interface: Template Creator">
                Role Interface: Template Creator
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>HD Video</h3>
              <p>Enjoy unlimited stable HD video play, front and center where it belongs.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>Intuitive Sheets</h3>
              <p>No more aimless searching for information. Navigate quickly with our automatic table of contents.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>Dice & Stats</h3>
              <p>
                Everything you need to track rolls, stat buffs, over/under scoring, pools, and more - right at your
                fingertips.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>Easy Assets</h3>
              <p>Cut down on prep time. Upload and manage reference images, PDFs, and more - quickly and easy.</p>
            </div>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>Maps & Tokens</h3>
              <p>
                Make any image into a map! Easily add tokens of any size, draw in real-time, and share with your party.
              </p>
            </div>
            <div className={styles.feature}>
              <h3 className={`heading1 is-centered teal ${styles.featureHeading}`}>Play Anything</h3>
              <p>Our template creator allows you to quickly build templates for any game, all 100% code-free.</p>
            </div>
          </div>

          <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
            Sign Up
          </a>
        </section>

        <h2 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Every Game You Can Imagine</h2>

        <div className={styles.games}>
          <div className={`${styles.imageContainer} ${styles.gamesImageContainer}`}>
            <div
              className={`${styles.image} ${styles.gamesImage}`}
              title="Numenera, Dungeions & Dragons, Mothership, Lancer, Mork Borg, Swordsfall, Masks"
            >
              Numenera, Dungeions & Dragons, Mothership, Lancer, Mork Borg, Swordsfall, Masks
            </div>
          </div>
        </div>

        <section className={pageStyles.section}>
          <p>
            With official support for many of your favorite games, Role’s template library is growing every day. Don’t
            see the game you want to play? Easy game template creation means you can quickly create sheets for any game
            in your library - even custom homebrew hacks! With Role, there’s no limit to the adventures you can enjoy.
          </p>
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

        <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
          Sign Up
        </a>

        <h2 className={`heading1 is-centered red ${pageStyles.sectionHeading1}`}>Loved by Players and Game Masters</h2>

        <section className={`${pageStyles.section} ${styles.testimonialsSection}`}>
          <div className={styles.testimonials}>
            <div className={styles.testimonialsColumn}>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “The @roleapp is a complete game changer. Utterly beautiful... it has everything we need.
                  <br />
                  1. Stability
                  <br />
                  2. Ease of Use
                  <br />
                  3. Customization for any scenario.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/Antifreke/status/1334552793764536320"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Antifreke
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “This platform is truly incredible. Switching fully from Skype/Roll20 to Role. Audio and video are
                  awesome. Great great quality. Loving it so far. Been looking for a platform that lets me create my own
                  sheets for years now.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://discord.com/channels/782099129769656321/783077831822934017/791423803410481214"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Gabe
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “This honestly feels like the best way to play DotD online. Highly recommend people check it out.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/DevTheGuy/status/1339066358982643712"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @DevTheGuy
                  </a>
                </div>
              </Panel>
            </div>
            <div className={styles.testimonialsColumn}>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “Sound quality is perhaps the best we’ve had, beating Discord, Roll20 and even Zoom. Fantastic quality
                  and no disconnects”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/brumpolarbears/status/1334253170399342596"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @brumpolarbears
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “Things I love about @roleapp:
                  <br />- UI is Clean/Easy to Read
                  <br />- Love the Camera and Mic is right there without needing a 3rd Party Program
                  <br />- Making Character Sheets is Simple”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/CroxMarcus/status/1359026131358384130"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @CroxMarcus
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “I'm so impressed with Role. We had our first session, the audio was perfect, video was very stable,
                  and one player spontaneously said, "wow, even filling my sheet out is fun". Everybody loved how Role
                  never got in the way.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://discord.com/channels/782099129769656321/783077831822934017/790861415879147530"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Jan
                  </a>
                </div>
              </Panel>
            </div>
            <div className={styles.testimonialsColumn}>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “The first time playing online without paper sheets next to us. With Role for character sheets, it
                  felt real in a way it hasn’t since quarantine. Thank you @roleapp.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/FoxAndBadgerRPG/status/1349184712279957507"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @FoxAndBadgerRPG
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “Not gonna lie, right now all our plans for live streaming future games are hinging on this platform.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://twitter.com/dicewarriors/status/1331708593612206085"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dicewarriors
                  </a>
                </div>
              </Panel>
              <Panel className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  “I’ve only run games on Role a couple of times, but the video and audio was absolutely silky smooth
                  both times. Got very positive comments from the players about the interface.”
                </p>
                <div className={styles.testimonialAuthor}>
                  -{' '}
                  <a
                    className="teal"
                    href="https://discord.com/channels/782099129769656321/783077831822934017/789155214770700308"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Bill
                  </a>
                </div>
              </Panel>
            </div>
          </div>
        </section>
      </div>

      <div className={pageStyles.sections}>
        <h2 className="heading1 is-centered">Are You a Game Creator or Publisher?</h2>

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
              action="/creators/thank-you"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="creators" />
              <input
                className={styles.input}
                type="text"
                placeholder="First name"
                aria-label="First name"
                name="first_name"
                required
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Last name"
                aria-label="Last name"
                name="last_name"
                required
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Email address"
                aria-label="Email address"
                name="email"
                required
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Website"
                aria-label="Website"
                name="website"
                required
              />
              <textarea
                className={styles.textarea}
                placeholder="Tell us more about you and what you are making..."
                aria-label="Tell us more about you and what you are making..."
                name="description"
                required
              />
              <div className={styles.recaptcha}>
                <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
              </div>
              <input type="submit" value="Contact Us" className={`button ${styles.submitButton}`} />
            </form>
          </div>
        </section>
      </div>

      <div className={`${pageStyles.sections} ${pageStyles.isWhite}`}>
        <h2 className={`heading1 is-centered teal ${pageStyles.sectionHeading1}`}>Early Access Now Open</h2>
        <section className={pageStyles.section}>
          <h3 className={`heading3 is-centered ${pageStyles.sectionHeading3}`}>Your Next Great Adventure Awaits</h3>
          <br />
          <a href="https://app.playrole.com/signup" className={`button ${pageStyles.button}`}>
            Sign Up
          </a>
        </section>
      </div>
    </Layout>
  )
}
