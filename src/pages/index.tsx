import Head from "next/head";
import { Roboto } from "next/font/google";
import SignUpModal from "@/components/signup/signupmodal";
import Layout from "@/components/main-page/layout";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeLeap - Test</title>
        <meta name="description" content="Posts page for the CodeLeap test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main className={roboto.className} style={{ background: "#DDDDDD" }}>
          <SignUpModal />
          <Layout></Layout>
        </main>
      </body>
    </>
  );
}
