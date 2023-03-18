import type { AppProps } from 'next/app'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { theme } from 'src/theme'
import { Provider } from 'react-redux'
import store from 'src/state'
import { FC } from 'react'
import {
  SITE_DESCRIPTION,
  SITE_LANG,
  SITE_MENTION,
  SITE_TITLE,
  SITE_URL,
} from 'src/constants'
import Head from 'next/head'
import { useRouter } from 'next/router'

const DEFAULT_META = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
}

const App: FC<AppProps> = ({ Component: ComponentWithLayout, pageProps }) => {
  const router = useRouter()

  const component = ComponentWithLayout.getLayout ? (
    ComponentWithLayout.getLayout(
      <ComponentWithLayout {...pageProps} />,
      pageProps,
    )
  ) : (
    <ComponentWithLayout {...pageProps} />
  )

  const meta = ComponentWithLayout.getMeta
    ? {
        ...DEFAULT_META,
        ...ComponentWithLayout.getMeta(pageProps),
      }
    : DEFAULT_META

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          {meta.title === SITE_TITLE
            ? SITE_TITLE
            : `${SITE_TITLE} | ${meta.title}`}
        </title>
        <meta name="description" content={meta.description} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:locale" content={SITE_LANG} />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:image"
          content={`${SITE_URL}/api/og?path=${router.asPath}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={meta.title} />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${SITE_MENTION}`} />
        <meta name="twitter:creator" content={`@${SITE_MENTION}`} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`${SITE_URL}/api/og?path=${router.asPath}`}
        />
        <meta name="twitter:image:alt" content={meta.title} />

        <link rel="canonical" href={`https://wecodev.com${router.asPath}`} />
      </Head>

      <ChakraBaseProvider theme={extendBaseTheme(theme)}>
        {component}
      </ChakraBaseProvider>
    </Provider>
  )
}

export default App
