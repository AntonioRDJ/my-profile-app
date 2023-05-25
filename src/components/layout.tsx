import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { type Locale, useLocale } from "~/hooks/useLocale";
import brFlag from "public/br-flag-xs.png";
import usFlag from "public/us-flag-xs.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="bg-blue-50 min-h-[calc(100vh-8rem)]">{children}</main>
      <Footer />
    </>
  );
}

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className="h-16 bg-zinc-400">
      <div className="h-full flex items-center py-4 px-8 ">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-800">My Profile Page</h2>
        </div>

        <nav className="flex-1 flex gap-4">
          <Link className={`${asPath === "/" ? "underline" : ""}`} href="/">Home</Link>
          <Link className={`${asPath === "/xuxa" ? "underline" : ""}`} href="/xuxa">Xuxa</Link>
        </nav>

        <LanguageSelector />
      </div>
    </header>
  );
}

const flagImages: Record<Locale, StaticImageData> = {
  "pt-BR": brFlag,
  "en": usFlag,
}

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const { activeLocale, locales } = useLocale();
  
  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  )

  const clickOpen = () => {
    setOpen((previous) => !previous);
  }

  return (
    <div className="flex flex-1 justify-end relative">
      <div className="cursor-pointer" onClick={clickOpen}>
        <Image src={flagImages[activeLocale]} alt="Country flag" height={32} width={32} />
      </div>
      {open && (
        <div className="absolute -bottom-20 right-0 bg-slate-50 rounded p-4 h-16 flex items-center">
          {otherLocales.map(loc => (
            <div className="cursor-pointer" key={loc} onClick={clickOpen}>
              <Link
                href=""
                locale={loc}
              >
                <Image src={flagImages[loc]} alt="Country flag" height={32} width={32} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="h-16 bg-zinc-400">
      <p>aqui vai as informações do footer</p>
    </footer>
  );
}
