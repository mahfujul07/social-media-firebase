import Head from "next/head";
import { Header, LeftSidebar, RightSidebar, Posts } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Media App</title>
        <meta
          name="description"
          content="It is a social media app using next js and tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="bg-slate-200">
        <div className="flex w-[80%] m-auto justify-between">
          <LeftSidebar />
          <Posts />
          <RightSidebar />
        </div>
      </div>

      {/* widgets */}
    </div>
  );
}
