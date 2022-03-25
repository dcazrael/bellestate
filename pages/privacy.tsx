import type { NextPage } from 'next'
import Head from 'next/head'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import Layout from '../components/layout/Layout'
import Section from '../components/Section'
import Title from '../components/Title'

const Company: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ベルエステート株式会社 - プライバシーポリシー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex flex-col justify-between px-8 mx-auto my-12 mt-4 md:mt-12 lg:px-20">
        <div className="block mb-8 md:hidden">
          <BreadCrumb title="プライバシーポリシー" />
        </div>
        <div className="flex justify-between mb-20">
          <Title mainTitle="プライバシーポリシー" enTitle="Privacy Policy" />
          <div className="hidden md:block">
            <BreadCrumb title="プライバシーポリシー" />
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-8">
          <p className="max-w-7xl">
            武蔵野住宅販売株式会社（以降「当社」）は、個人情報保護に関する法令およびそのほかの規範を遵守いたします。
            当社が収集する個人情報とは、個人の氏名、生年月日、住所など特定の個人を識別できる情報（ほかの情報と容易に照合することで、それにより特定の個人を識別できることも含みます）をいいます。
          </p>
          <Section title="個人情報の収集について">
            <p>
              当社では、お客様からのお問い合わせに際し、お客様を確認するために住所・名前・電話番号などをお聞かせいただく場合があります。お問い合わせの際、結果がすぐに判明しないなどの場合は、あらためてご連絡をとらせていただくことがありますが、ご了承いただけるようお願いいたします。また当社では、下記の場合に個人情報を収集することがあります。
            </p>
            <ul className="mt-2">
              <li className="list-disc list-inside list-item">お問い合わせ</li>
            </ul>
          </Section>
          <Section title="個人情報の利用目的について">
            <p>
              当社がお客様からいただいた個人情報は、下記目的の必要な範囲で使用いたします。
            </p>
            <ul className="mt-2">
              <li className="list-disc list-inside list-item">
                お申し込みの確認をするため
              </li>
              <li className="list-disc list-inside list-item">
                お問い合わせなどに対する回答や確認のご連絡のため
              </li>
              <li className="list-disc list-inside list-item">
                ご利用履歴の確認をおこない、充実したサービスをおこなうため
              </li>
              <li className="list-disc list-inside list-item">
                サービスを向上させるための分析をおこなうため
              </li>
              <li className="list-disc list-inside list-item">
                お客様にあったサービスを提供するため
              </li>
            </ul>
          </Section>
          <Section title="個人情報の第三者への開示について">
            <p>
              当社が取得したお客様の個人データは、下記の場合を除き、原則として、いかなる第三者にも開示することはありません。
            </p>
            <ul className="mt-2">
              <li className="list-disc list-inside list-item">
                開示先、開示情報内容を特定したうえで、お客様の合意がある場合
              </li>
            </ul>
          </Section>
          <Section title="個人情報の管理・保護について">
            <p>
              当社が収集したお客様の個人情報については、適切な管理をおこない、紛失・破壊・改ざん・不正アクセス・漏洩などの防止に努めます。
            </p>
          </Section>
          <Section title="個人情報の開示・訂正・削除について">
            <p>
              個人情報はできるだけ正確かつ最新の状態で管理するよう努めています。
              また、個人情報の開示・削除については、お客様ご自身が下記のお問い合わせ窓口へご連絡ください。第三者への個人情報の漏洩を防ぐため、当該請求がお客様ご本人によるものであることが確認できた場合に限り対応いたします。
            </p>
          </Section>
          <Section title="個人情報保護方針の改正について">
            <p>
              当社はプライバシーポリシー(個人情報保護方針)を適宜見直し、改定していきます。改定されたプライバシーポリシーは、すみやかに当社Webサイトに掲載いたします。
            </p>
          </Section>
          <Section title="個人情報の管理・保護について">
            <p>
              当社のプライバシーポリシーに関するお問い合わせは、下記担当者までお願いいたします。
            </p>
          </Section>
          <section className="max-w-3xl p-4 bg-gray-900 border border-gray-600 hue">
            <h2 className="text-lg font-bold">ベルエステート株式会社</h2>
            <address className="flex flex-col mt-2">
              <div>
                愛知県名古屋市中村区則武1-7-15
                <br />
                ダイソー18号館302号室
              </div>
              <span>
                Tel: <a href="tel:+81527563072">052-756-3072</a>
              </span>
              <span>
                Fax: <a href="fax:+81527563073">052-756-3073</a>
              </span>
            </address>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Company
