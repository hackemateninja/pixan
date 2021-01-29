import '../styles/global.css'
import {AppProps} from "next/app";
import {UserContextProvider} from "../contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
