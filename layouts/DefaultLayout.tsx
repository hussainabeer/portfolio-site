import { ReactElement, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <h1>Header</h1>
      <main>{children}</main>
      <h1>Footer</h1>
    </>
  );
}
