import Image from 'next/image';
import { ReactElement } from 'react';
import styles from './TechStackCard.module.css';

function TechStackCard(): ReactElement {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src="/express-icon.svg"
          layout="responsive"
          width="50"
          height="40"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <p>Express.js</p>
    </div>
  );
}

export default TechStackCard;
