import Layout from "../components/Layout";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </Layout>
  );
}
