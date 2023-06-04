import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });


import '@/styles/globals.css';
/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (<main className={montserrat.className}>
    <Component {...pageProps} />;
  </main>)
}

export default MyApp;
