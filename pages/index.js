import Head from 'next/head'
import { Header, Feeds } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Social Media App</title>
        <meta name="description" content="It is a social media app using next js and tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header />

      <Feeds />

      {/* widgets */}


    </div>
  )
}
