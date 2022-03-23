import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import SlideShow from '../components/slideshow/SlideShow'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ベルエステート株式会社</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-[30rem] w-full">
        <SlideShow />
      </div>
      <div className="container flex flex-col items-center justify-between px-8 mx-auto my-12 space-y-12 md:flex-row md:space-y-0 md:space-x-24 lg:space-x-48 lg:px-20">
        <div className="md:w-1/2">
          <div className="relative left-6 flex items-center text-3xl before:absolute before:-top-2 before:-left-6 before:-z-10 before:h-14 before:w-28 before:border-[3px] before:border-primary before:content-['']">
            <div className="flex items-center mr-2">
              <Image
                src="/icons/earmark-person.svg"
                width={36}
                height={36}
                alt="profile"
              />
            </div>
            <span>会社概要</span>
          </div>
          <div className="mt-4 text-base">
            自社物件へのたくさんのお問い合わせありがとうございます。是非1度自社の物件のご内覧をおすすめ致します！これからもたくさんのお問い合わせお待ちしております。
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative left-6 flex items-center text-3xl before:absolute before:-top-2 before:-left-6 before:-z-10 before:h-14 before:w-28 before:border-[3px] before:border-primary before:content-['']">
            <div className="flex items-center mr-2">
              <Image
                src="/icons/contact-card.svg"
                width={36}
                height={36}
                alt="Contact card"
              />
            </div>
            <span>お問合わせ</span>
          </div>
          <div className="mt-4 text-base">
            自社物件へのたくさんのお問い合わせありがとうございます。是非1度自社の物件のご内覧をおすすめ致します！これからもたくさんのお問い合わせお待ちしております。
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
