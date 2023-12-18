// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en" className="scroll-smooth">
//       <Head>
//         <script type="text/javascript">
//           /* if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
//           window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
//           {document.documentElement.classList.add("dark")} else{" "}
//           {document.documentElement.classList.remove("dark")}
//           // Whenever the user explicitly chooses light mode localStorage.theme
//           = 'light' // Whenever the user explicitly chooses dark mode
//           localStorage.theme = 'dark' // Whenever the user explicitly chooses to
//           respect the OS preference localStorage.removeItem('theme') */
//         </script>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const themeToUse = 'light';
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(themeToUse);
              localStorage.setItem('preferredTheme', themeToUse);
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
