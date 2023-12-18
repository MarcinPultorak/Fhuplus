import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* <meta name="color-scheme" content="only light" /> */}
        <title>
          Serwis Samochodowy Mierzyn | FHUPLUS - Mechanik Samochodowy
        </title>
        <meta
          name="description"
          content="FHUPLUS to profesjonalny serwis samochodowy w Mierzynie. Oferujemy kompleksowe usługi mechaniczne dla Twojego pojazdu. Skorzystaj z doświadczenia naszych mechaników samochodowych."
        ></meta>
        <meta
          name="keywords"
          content="serwis samochodowy, mechanik samochodowy, FHUPLUS, naprawa samochodów, obsługa techniczna pojazdów, warsztat samochodowy, naprawa pojazdów, usługi mechaniczne, serwis aut, mechanik samochodowy Mierzyn, diagnostyka samochodowa, sprawdzanie błędów, diagnostyka pojazdów, komputerowa diagnostyka, badanie samochodu, obsługa techniczna pojazdów, przeglądy techniczne, konserwacja samochodu, serwis samochodowy Mierzyn, części zamienne do samochodów, oryginalne części, akcesoria samochodowe, sklep motoryzacyjny, serwis samochodowy Mierzyn, mechanik Mierzyn, naprawa aut Mierzyn, mechanik Szczecin"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          property="og:title"
          content="Serwis Samochodowy Mierzyn | FHUPLUS - Mechanik Samochodowy"
        ></meta>
        <meta
          property="og:description"
          content="FHUPLUS to profesjonalny serwis samochodowy w Mierzynie. Oferujemy kompleksowe usługi mechaniczne dla Twojego pojazdu. Skorzystaj z doświadczenia naszych mechaników samochodowych."
        ></meta>
        <meta property="og:url" content="http://www.fhuplus.pl"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
