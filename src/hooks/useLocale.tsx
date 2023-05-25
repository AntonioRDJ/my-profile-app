import { useRouter } from "next/router";

export type Locale = "pt-BR" | "en";

export function useLocale() {
  const router = useRouter();

  return {
    activeLocale: router.locale as Locale,
    locales: router.locales as Array<Locale>,
    defaultLocale: router.defaultLocale as Locale,
  };
}
