import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { type AbstractIntlMessages, NextIntlProvider } from "next-intl";

type MyAppProps = {
  messages?: AbstractIntlMessages;
};

const MyApp: AppType<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Head>
          <title>Antonio Rodrigues</title>
          <meta name="description" content="My profile page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
};

export default MyApp;
