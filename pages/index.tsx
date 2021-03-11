import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is Barney. He is a dog.</p>
        <p>We did some testing and stuff.</p>
        <p>Final verdict. He's definitely a dog.</p>
      </section>
    </Layout>
  )
}
