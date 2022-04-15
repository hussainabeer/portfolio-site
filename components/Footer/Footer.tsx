import { ReactElement } from 'react';
import styles from './Footer.module.css';

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/hussainabeer" target="_blank">
          <img src="/icons/github-icon.svg" alt="Github Icon" />
        </a>
        <a href="https://twitter.com/hussainabeer_" target="_blank">
          <img src="/icons/twitter-icon.svg" alt="Twitter" />
        </a>
        <a href="https://t.me/hussainabeer" target="_blank">
          <img src="/icons/telegram-icon.svg" alt="Telegram Icon" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Hussain Abeer</p>
    </footer>
  );
}

export default Footer;
