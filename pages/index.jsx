import NavBar from "../src/components/NavBar";
import { Container } from "@mui/material";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Jadez App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="../../styles/TopProgessBar.module.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        /> */}
      </Head>
      <main>
        <Container></Container>
      </main>

      <footer></footer>
    </div>
  );
}
