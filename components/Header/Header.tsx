import React, { ReactElement } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header(): ReactElement {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li>
            <Link href="/portfolio">
              <a>Portfolio </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a>Blog </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
