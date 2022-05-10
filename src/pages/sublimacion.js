import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Carrousel from '@site/src/components/Carrousel';
import { SliderData } from '@site/src/components/Carrousel/SliderData';

export default function Sublimation() {
  return (
    <Layout
      title="sublimación"
      description="muestra de mi portafolio como en mi afinadad en la sublimación de mugs"
    >
      <Head>
        <meta name="keywords" content="juliomixtreria, juliomixtreria sublimacion, vasos jc" />
        <meta name="robots" content="index, follow" />
        <base href="https://julio-mixtreria.web.app" />
        <link rel="canonical" href="https://julio-mixtreria.web.app/sublimacion" />
      </Head>
      <main>
        <h1 className="text--center text--primary margin-vert--md">portafolio de sublimación</h1>
        <Carrousel slides={SliderData} />
      </main>
    </Layout>
  );
}