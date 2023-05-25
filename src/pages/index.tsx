import { type GetStaticProps, type NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const t = useTranslations("home");

  return (
    <>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <h5>teste do intl:</h5>
      <h6>{t("ola")}</h6>
      <Link href="/xuxa">
        Go to Xuxa
      </Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      messages: (await import(`~/dictionaries/${context.locale as string}/index.json`)).default
    }
  };
}

export default Home;
