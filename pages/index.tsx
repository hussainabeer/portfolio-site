import type { NextPage } from 'next';
import Image from 'next/image';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import PersonImage from '../assets/images/abeer.jpg';
import styles from './index.module.css';
import TechStackCard from '../components/TechStackCard/TechStackCard';

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_image}>
          <Image src={PersonImage} objectFit="fill"></Image>
        </div>
        <div className={styles.hero_text}>
          <h1>Hi, My name is</h1>
          <h1>Abeer</h1>
        </div>
      </section>
      <section className={`${styles.who_am_i} container_sm`}>
        <h2>Who Am I?</h2>
        <p>
          I am a full-stack web developer from the Maldives. My main area of
          focus is JavaScript and I have experience in both backend and frontend
          side of development, along with mobile development with Flutter.
        </p>
      </section>
      <section className={`${styles.recent_work} container_md`}>
        <h2>Recent Work</h2>
        <div>
          <PortfolioCard />
        </div>
        <button>View Portfolio</button>
      </section>
      <section className={`${styles.what_i_use} container_md`}>
        <h2>What I use</h2>
        <div>
          <TechStackCard />
          <TechStackCard />
          <TechStackCard />
        </div>
      </section>
    </>
  );
};

export default Home;
