import { ReactNode } from 'react'

declare module 'next' {
  export interface MetaData {
    /**
     * Leaving title empty will default it to the site title.
     */
    title?: string
    description?: string
    image?: string
  }

  export type GetNextPageLayout<P> = (page: ReactNode, props: P) => ReactNode
  export type GetMeta<P> = (props: P) => MetaData

  export interface NextPage<Props = {}, InitialProps = Props> {
    getLayout?: GetNextPageLayout<Props>
    getMeta?: GetMeta<Props>
  }

  export interface NextPageContext {
    getLayout?: GetNextPageLayout
    getMeta?: GetMeta
  }

  export interface NextComponentType<
    C extends NextPageContext,
    IP = C['initialProps'],
    P = {},
  > {
    getLayout?: GetNextPageLayout
    getMeta?: GetMeta
  }
}

declare global {
  declare namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      SITE_URL: string
    }
  }
}
