import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Script src="/assets/vendor/hs-navbar-vertical-aside/hs-navbar-vertical-aside-mini-cache.js" strategy='beforeInteractive' />

      {/* JS Global Compulsory */}
      <Script src="/assets/vendor/jquery/dist/jquery.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" strategy='beforeInteractive' />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
