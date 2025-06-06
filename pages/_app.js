import {Analytics} from '@vercel/analytics/next';
import "../styles/index.css"

function MyApp({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />;
    </>
  );
}

export default MyApp
