import "tailwindcss/tailwind.css";
import {AppProps} from "next/app";
import {Default} from "@/layouts/index";
import {UserContextProvider} from "@/contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Default meta={''}>
        <Component {...pageProps} />
      </Default>
    </UserContextProvider>
  )
}

export default MyApp
