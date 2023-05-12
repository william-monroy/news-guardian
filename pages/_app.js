import { Layout } from "@/components/Layouts/Layout";
import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
