import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import * as Yup from 'yup'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import Layout from '../components/layout/Layout'
import LoadingCube from '../components/LoadingCube'
import Title from '../components/Title'

const Contact: NextPage = () => {
  const [loadState, setLoadState] = useState(false)
  const [sentState, setSentState] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      furigana: '',
      reply_to: '',
      phone: '',
      message: '',
      checkBox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('* お名前を入力してください'),
      furigana: Yup.string().required('* ふりがなを入力してください'),
      reply_to: Yup.string()
        .email('メールアドレスが無効です')
        .required('* メールアドレスを入力してください'),
      phone: Yup.string().required('* 電話番号を入力してください'),
      message: Yup.string().required('* お問い合わせ内容を入力してください'),
      checkBox: Yup.boolean().oneOf([true], '* チェックが必要です'),
    }),
    onSubmit: (values) => {
      setLoadState(true)
      try {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_FORMIK_SERVICE_ID!,
            process.env.NEXT_PUBLIC_FORMIK_TEMPLATE_ID!,
            values,
            process.env.NEXT_PUBLIC_FORMIK_USER_ID!
          )
          .then(() => {
            console.log('Success')
            setLoadState(false)
            setSentState(true)
            formik.resetForm()
            setTimeout(() => setSentState(false), 2500)
          })
      } catch (err) {
        console.log(err)
      }
    },
  })

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
          onSubmit={formik.handleSubmit}
        >
          <div className="content-between order-4 md:col-span-full md:row-start-4 lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:grow lg:place-self-end">
            <div className={`${sentState ? 'flex' : 'hidden'} mb-8`}>
              <span className="w-full rounded-md border-[3px] border-primary p-4 text-center font-bold text-primary">
                お問い合わせいただきありがとうございます。
                間もなくご連絡いたします。
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center w-full gap-4">
                <input
                  type="checkbox"
                  name="checkBox"
                  id="checkBox"
                  checked={formik.values.checkBox}
                  onChange={formik.handleChange}
                />
                <label htmlFor="checkBox">
                  ご記入が終わりましたら、チェックを入れて [確認画面へ]
                  ボタンを押してください。
                </label>
              </div>
              <div className={`ml-8 mt-2 text-red`}>
                {formik.errors.checkBox}
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="flex w-full justify-center space-x-2 rounded-full border-[3px] border-transparent bg-primary px-3 py-1 font-medium text-white transition-colors duration-300 hover:border-primary hover:bg-transparent hover:text-primary"
              >
                {loadState ? (
                  <>
                    <LoadingCube />
                    <span>送信中</span>
                  </>
                ) : (
                  <span>確認画面へ</span>
                )}
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="松本　明子"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="name"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              お名前
            </label>
            <div className={`mt-2 text-red`}>{formik.errors.name}</div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              id="furigana"
              name="furigana"
              placeholder="まつもと　あきこ"
              onChange={formik.handleChange}
              value={formik.values.furigana}
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="furigana"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              ふりがな
            </label>
            <div className={`mt-2 text-red`}>{formik.errors.furigana}</div>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              placeholder="matsumoto.a@example.co.jp"
              onChange={formik.handleChange}
              value={formik.values.reply_to}
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="reply_to"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              メールアドレス
            </label>
            <div className={`mt-2 text-red`}>{formik.errors.reply_to}</div>
          </div>
          <div className="relative w-full">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="070-1234-5678"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="w-full px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="phone"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              電話番号
            </label>
            <div className={`mt-2 text-red`}>{formik.errors.phone}</div>
          </div>
          <div className="relative w-full col-span-2">
            <textarea
              id="message"
              name="message"
              placeholder="まつもと　あきこ"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="w-full h-32 px-3 py-2 text-xl border-2 cursor-pointer field border-primary focus:outline-none"
            />
            <label
              htmlFor="message"
              className="absolute z-20 px-2 py-1 text-xl transition-all duration-300 bg-transparent top-1 left-1 cursor-text"
            >
              お問合わせ内容
            </label>
            <div className={`mt-2 text-red`}>{formik.errors.message}</div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
