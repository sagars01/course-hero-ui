import '../styles/globals.css';
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
