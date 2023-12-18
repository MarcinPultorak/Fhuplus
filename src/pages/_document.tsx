import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="color-scheme" content="light only" />
        <title>
          Serwis Samochodowy Mierzyn | FHUPLUS - Mechanik Samochodowy
        </title>
        <meta
          name="description"
          content="FHUPLUS to profesjonalny serwis samochodowy w Mierzynie. Oferujemy kompleksowe usługi mechaniczne dla Twojego pojazdu. Skorzystaj z doświadczenia naszych mechaników samochodowych."
        ></meta>
        <meta
          name="keywords"
          content="serwis samochodowy, mechanik samochodowy, FHUPLUS, Mierzyn, naprawa samochodów, obsługa techniczna pojazdów"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
