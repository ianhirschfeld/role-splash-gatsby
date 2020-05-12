import React from 'react'
import PropTypes from 'prop-types'
import styles from './mailchimp.module.css'

const Mailchimp = ({ isSlanted }) => {
  const hiddenPositionedStyle = {
    position: 'absolute',
    left: '-5000px',
  }
  const hiddenStyle = {
    display: 'none',
  }

  return (
    <div id="mc_embed_signup" className={isSlanted ? styles.slantedEmailForm : ''}>
      <form
        action="https://playrole.us4.list-manage.com/subscribe/post?u=e07e90c140e6a2d554c2f4a7a&amp;id=c8c46c702b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className={['email', styles.email].join(' ')}
            id="mce-EMAIL"
            placeholder="Email address"
            required
          />
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={hiddenStyle} />
            <div className="response" id="mce-success-response" style={hiddenStyle} />
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={hiddenPositionedStyle} aria-hidden="true">
            <input type="text" name="b_e07e90c140e6a2d554c2f4a7a_c8c46c702b" tabIndex="-1" defaultValue="" />
          </div>
          <input
            type="submit"
            value="Sign up!"
            name="subscribe"
            id="mc-embedded-subscribe"
            className={`button is-pink ${styles.submit}`}
          />
        </div>
      </form>
    </div>
  )
}

Mailchimp.propTypes = {
  isSlanted: PropTypes.bool,
}

Mailchimp.defaultProps = {
  isSlanted: false,
}

export default Mailchimp
