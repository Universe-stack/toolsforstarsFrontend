import type { NextPage } from 'next';
import Head from 'next/head';
import '../globals.css';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import localFont from '@next/font/local';
import { IconsContextProvider } from '@/context/IconsContext';
import { AuthProvider } from '@/context/AuthContext';
import { ResourceProvider } from '@/context/ResourceContext';
import {BackdropContextProvider} from '@/context/BackdropContext';
import { PaymentsContextProvider } from '@/context/PaymentsContext';


export interface Metadata {
  title: string;
  description: string;
}

const maison= localFont({
  src: '../EuclidCircularARegular.ttf',
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
        <BackdropContextProvider>
        <AuthProvider>
          <PaymentsContextProvider>
            <Navbar />
            <ResourceProvider>
            <IconsContextProvider>
              {children}
            </IconsContextProvider>
            </ResourceProvider>
            <Footer />
          </PaymentsContextProvider>
        </AuthProvider>
        </BackdropContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
