import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body
        style={{ width: '100vw', height: '100vh' }}
        className='bg-fuchsia-700'
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
