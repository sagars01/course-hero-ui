import Link from "next/link";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Course Hero</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href={"/creator/home"}>Here</Link>
    </>
  )
}
