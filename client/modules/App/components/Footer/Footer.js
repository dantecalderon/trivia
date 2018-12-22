import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Footer.css';

import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@dantehemerson" target="_Blank">@dantehemerson</a></p>
    </div>
  )
}

export default Footer;
