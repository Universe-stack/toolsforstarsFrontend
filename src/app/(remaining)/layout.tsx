import type { NextPage } from 'next';
import Head from 'next/head';
import '../globals.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import localFont from '@next/font/local';
import { IconsContextProvider } from '@/context/IconsContext';
import { AuthProvider } from '@/context/AuthContext';
import { ResourceProvider } from '@/context/ResourceContext';

export interface Metadata {
  title: string;
  description: string;
}

const maison= localFont({
  src: '../centra.otf',
});

export const metadata = {
  title: "Createcamp",
  description: "This is a great website about everything!",
};

const RootLayout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={maison.className} /> {/* Assuming CSS class */}
      </Head>
      <body className={maison.className}>
        <AuthProvider>
          <Navbar />
          <ResourceProvider>
          <IconsContextProvider>
            {children}
          </IconsContextProvider>
          </ResourceProvider>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
