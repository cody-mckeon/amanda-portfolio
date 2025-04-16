// src/pages/index.tsx

import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amanda McKeon | Product Designer</title>
        <meta name="description" content="Portfolio of Amanda McKeon, a product designer focused on human-centered design." />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
