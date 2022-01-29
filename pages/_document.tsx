import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head />
      <body className="bg-gradient-to-l from-blue-100 via-blue-200 to-yellow-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}