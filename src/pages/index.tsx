import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

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


const Index = () => {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Seja Bem-vindo!</h1>
        <Link className="bg-gradient-to-r from-blue-500 to-purple-500 font-bold py-2 px-4 rounded-full" id="cardapio" href={'/cardapio'}>Fazer Pedido</Link>
      </div>
    </Layout>
  );
};


export default Index;
