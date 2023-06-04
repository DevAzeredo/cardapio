import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import DarkModeToggle from '@/components/darkmodetoggle';
import '@/styles/globals.css';
const montserrat = Montserrat({ subsets: ['latin'] });

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeToggle />
      <main className={montserrat.className}>
        <Component {...pageProps} />;
      </main>
    </>
  );
}

export default MyApp;
