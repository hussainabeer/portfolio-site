import Image from 'next/image';
import { ReactElement } from 'react';
import styles from './PortfolioCard.module.css';

function PortfolioCard(): ReactElement {
  return (
    <div className={styles.card}>
      <Image
        src="/p-image-test.png"
        layout="responsive"
        width="16"
        height="8"
      />
      <p>Case Management System - JSC</p>
    </div>
  );
}

export default PortfolioCard;
