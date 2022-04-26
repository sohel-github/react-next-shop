import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import { StateProvider } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
}

export default MyApp;
