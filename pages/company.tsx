import type { NextPage } from 'next'
import Head from 'next/head'
import BreadCrumb from '../components/breadcrumb/BreadCrumb'
import Layout from '../components/layout/Layout'
import Map from '../components/Map'
import Title from '../components/Title'

const Company: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ベルエステート株式会社 - 会社概要</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex flex-col justify-between px-8 mx-auto my-12 mt-4 md:mt-12 lg:px-20">
        <div className="block mb-8 md:hidden">
          <BreadCrumb title="会社概要" />
        </div>
        <div className="flex justify-between mb-20">
          <Title mainTitle="会社概要" enTitle="Company Profile" />
          <div className="hidden md:block">
            <BreadCrumb title="会社概要" />
          </div>
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-1/2">
            <dl className="grid justify-end grid-cols-1 gap-4 md:grid-cols-2">
              <dt className="font-bold after:content-[':']">商号</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                ベルエステート株式会社
              </dd>
              <dt className="font-bold after:content-[':']">電話 ／ FAX</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                <span className="phone">052-756-3072</span> /{' '}
                <span className="fax">052-756-3073</span>
              </dd>
              <dt className="font-bold after:content-[':']">営業時間</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                10:00～19:00 ／ 水曜日定休
              </dd>
              <dt className="font-bold after:content-[':']">所在地</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                愛知県名古屋市中村区則武1-7-15
                <br />
                ダイソー18号館302号室
              </dd>
              <dt className="font-bold after:content-[':']">アクセス</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                <span className="train">東海道線　「名古屋」駅　徒歩8分</span>
              </dd>
              <dt className="font-bold after:content-[':']">代表者</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                日置　健文
              </dd>
              <dt className="font-bold after:content-[':']">免許番号</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                愛知県知事（1）第24874号
              </dd>
              <dt className="font-bold after:content-[':']">所属団体</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                （公社）全日本不動産協会会員
                <br />
                全日本不動産政治連盟
                <br />
                （公社）中部圏不動産流通機構
              </dd>
              <dt className="font-bold after:content-[':']">保証協会</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                （公社）不動産保証協会
              </dd>
              <dt className="font-bold after:content-[':']">主な取扱物件</dt>
              <dd className="pb-4 mb-4 text-right border-b border-primary md:mb-0 md:border-0 md:pb-0">
                売中古一戸建・その他
              </dd>
            </dl>
          </div>
          <div className="mt-12 h-96 lg:mt-0 lg:h-auto lg:w-2/5">
            <Map />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Company
