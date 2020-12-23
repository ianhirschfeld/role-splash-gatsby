import React from 'react'
import styles from './google-form.module.css'

const GoogleForm = () => {
  return (
    <form
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeno4_14afJaKoqq6g90O6ZhU5PJ7IrE4GUmMKHFxoTsEpgOw/formResponse"
      method="POST"
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Email address"
        aria-label="Email address"
        name="entry.1774035171"
        defaultValue=""
      />
      <input
        className={styles.input}
        type="text"
        placeholder="First name"
        aria-label="First name"
        name="entry.1209093840"
        defaultValue=""
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Last name"
        aria-label="Last name"
        name="entry.768651980"
        defaultValue=""
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Website"
        aria-label="Website"
        name="entry.1016093585"
        defaultValue=""
      />
      <textarea
        className={styles.textarea}
        placeholder="Tell us more about you..."
        aria-label="Tell us more about you..."
        name="entry.962014774"
      />
      <input type="submit" value="Contact Us" className={`button heading2 is-centered is-pink ${styles.submit}`} />
    </form>
  )
}

export default GoogleForm
