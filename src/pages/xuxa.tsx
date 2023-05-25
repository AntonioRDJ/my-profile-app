import { type NextPage } from "next";
import Link from "next/link";
import { useLocale } from "~/hooks/useLocale";

const Xuxa: NextPage = () => {
  const { activeLocale, locales, defaultLocale } = useLocale();
  
  return (
    <>
      {activeLocale === "pt-BR" ? <p>é br</p> : <></>}
      <p>Current locale: {activeLocale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>
      <Link href="/">
        Go to Home
      </Link>
    </>
  );
};

export default Xuxa;
