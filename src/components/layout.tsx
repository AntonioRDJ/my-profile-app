
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <p>Logo</p>
        </div>

        <div>
          <p>ancoras para os topicos</p>
        </div>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>aqui vai as informações do footer</p>
    </footer>
  );
}
