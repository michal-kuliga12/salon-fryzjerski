import Layout from '../comps/layout/Layout'
import '../styles/globals.scss'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
    return (
      <>
        {(router.pathname !== "/admin" && router.pathname !== "/login" ? (
            <>
            <Layout>
            <Component {...pageProps} />
            </Layout>
            </>
          ):(
            <Component {...pageProps} />
        ))}
      </>
    );
}

export default MyApp
