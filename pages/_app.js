import { Layout } from "@/components/Layouts/Layout";
import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    // colors: {
    //   // primary: "#4ADE7B",
    //   // secondary: "#F9CB80",
    //   // error: "#FCC5D8",
    // },
  },
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
