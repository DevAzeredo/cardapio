/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Index = () => {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='mb-8 text-4xl font-bold'>Seja Bem-vindo!</h1>
        <Link
          className='rounded bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-700'
          id='cardapio'
          href='/cardapio'
        >
          Fazer Pedido
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
