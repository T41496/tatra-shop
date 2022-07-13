import '@assets/main.css'
import '@assets/chrome-bug.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'
import { ManagedUIContext } from '@components/ui/context'
import { NextIntlProvider } from 'next-intl'
import { useRouter } from 'next/router'
import en from '../lang/en-US.json'
import sk from '../lang/sk.json'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  const router = useRouter()
  const { locale } = router
  const translations = {
    'en-US': en,
    sk,
  }
  pageProps.messages = translations[locale]

  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <Head />
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </NextIntlProvider>
    </>
  )
}
