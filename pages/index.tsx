import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { GetServerSideProps } from "next";

const cache = createCache({
  key: "emotion",
})

/** Add your relevant code here for the issue to reproduce */
export default function Home({ runtime }) {
  return (
    <CacheProvider value={cache}>
      <div>hello from {runtime}</div>
    </CacheProvider>
  )
}

export const config = {
  runtime: 'experimental-edge',
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      runtime: process.env.NEXT_RUNTIME,
    }
  }
}
