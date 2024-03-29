import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import websiteData from "../constants/websiteData";

export default function PageContainer({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: websiteData.defaultTitle,
    description: websiteData.defaultDescription,
    image: websiteData.defaultImage,
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${websiteData.websiteUrl}${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`${websiteData.websiteUrl}${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={websiteData.meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={websiteData.meta.twitterSite} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main>
        <Header />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
