import emailjs from '@emailjs/browser'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import Layout from '../components/layout/Layout'
import Title from '../components/Title'

const Contact: NextPage = () => {
  const form = useRef<HTMLFormElement | undefined>()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current!,
        'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <Layout>
      <Head>
        <title>ベルエステート株式会社 - お問合わせフォーム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex flex-col justify-between px-8 mx-auto my-12 mt-4 md:mt-12 lg:px-20">
        <div className="block mb-8 md:hidden">
          <BreadCrumb title="お問合わせ" />
        </div>
        <div className="flex justify-between mb-20">
          <Title mainTitle="お問合わせフォーム" enTitle="Contact form" />
          <div className="hidden md:block">
            <BreadCrumb title="お問合わせ" />
          </div>
        </div>
        <form
          className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3"
          onSubmit={sendEmail}
        >
          <div className="order-4 md:col-span-full md:row-start-4 lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:place-self-end">
            <div className="flex items-center w-full gap-4">
              <input type="checkbox" name="confirm" id="confirm" />
              <label htmlFor="confirm">
                ご記入が終わりましたら、チェックを入れて [確認画面へ]
                ボタンを押してください。
              </label>
            </div>
            <div className="mt-8">
              <input
                type="submit"
                value="確認画面へ"
                className="w-full rounded-full border-[3px] border-transparent bg-primary px-3 py-1 font-medium text-white transition-colors duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
              />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="松本　明子"
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="name"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              お名前
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="furigana"
              name="furigana"
              placeholder="まつもと　あきこ"
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="furigana"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              ふりがな
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="matsumoto.a@example.co.jp"
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="email"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              メールアドレス
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="070-1234-5678"
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="phone"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              電話番号
            </label>
          </div>
          <div className="relative w-full col-span-2">
            <textarea
              id="message"
              name="message"
              placeholder="まつもと　あきこ"
              className="w-full h-32 px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="message"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              お問合わせ内容
            </label>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
