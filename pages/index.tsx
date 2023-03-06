import Head from "next/head";
import Game from "./components/game";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>TSTetris</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Game />
      </main>
    </>
  );
}