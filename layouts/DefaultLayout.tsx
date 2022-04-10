import { ReactElement, ReactNode } from 'react';
import Header from '../components/Header/Header';

type LayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <h1>Footer</h1> */}
    </>
  );
}
