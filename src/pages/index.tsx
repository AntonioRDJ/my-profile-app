import { GetStaticProps, type NextPage } from "next";
import { useRouter } from "next/router";
import LocaleSwitcher from "~/components/localeSwitcher";
import { useTranslations } from "next-intl";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const t = useTranslations("home");

  return (
    <>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <LocaleSwitcher />
      <h5>teste do intl:</h5>
      <h6>{t("ola")}</h6>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`~/dictionaries/${context.locale}/index.json`)).default
    }
  };
}

export default Home;
