import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Script src="/assets/vendor/hs-navbar-vertical-aside/hs-navbar-vertical-aside-mini-cache.js" strategy='beforeInteractive' />
      {getLayout(<Component {...pageProps} />)}

      {/* JS Global Compulsory */}
      <Script src="/assets/vendor/jquery/dist/jquery.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/jquery-migrate/dist/jquery-migrate.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" strategy='beforeInteractive' />

      {/* JS Implementing Plugins  */}
      <Script src="/assets/vendor/hs-navbar-vertical-aside/hs-navbar-vertical-aside.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/hs-unfold/dist/hs-unfold.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/hs-form-search/dist/hs-form-search.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/select2/dist/js/select2.full.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/chart.js/dist/Chart.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/chart.js.extensions/chartjs-extensions.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/daterangepicker/moment.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/daterangepicker/daterangepicker.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/datatables/media/js/jquery.dataTables.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/datatables.net.extensions/select/select.min.js" strategy='beforeInteractive' />
      <Script src="/assets/vendor/clipboard/dist/clipboard.min.js" strategy='beforeInteractive' />

      {/* JS Front */}
      <Script src="/assets/js/theme.min.js" />
      {/* JS Plugins Init */}
      <Script src="/assets/js/js-plugins_init.js" />
      {/* IE Support */}
      <Script src='/assets/js/ie-support.js' />

    </>
  )
}

export default MyApp
