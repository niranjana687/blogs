import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMD}>
        <p>Hello! I am Niranjana</p>
        <p>I am a computer science and engineering undergraduate student from India!</p>
      </section>
    </Layout>
  )
}
