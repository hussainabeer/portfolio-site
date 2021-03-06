import { ReactElement, ReactNode } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* <h1>Footer</h1> */}
    </>
  );
}
