import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
