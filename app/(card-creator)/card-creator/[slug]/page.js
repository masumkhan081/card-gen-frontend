import CardPageSlug from '@/app/components/CardPageSlug';
import React from 'react'


export default function Card({ params }) {
  const { slug } = params;

  return (
    <main className="">
      <CardPageSlug slug={slug} />
      {/* <NationSettings/> */}
    </main>
  );
}


