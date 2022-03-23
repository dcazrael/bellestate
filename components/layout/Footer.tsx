const Footer = () => {
  return (
    <footer className="flex flex-col justify-center w-full border-t border-primary">
      <div className="w-full bg-gray">
        <div className="container flex flex-col justify-between px-8 mx-auto my-10 space-y-12 md:flex-row md:space-y-0 lg:px-20">
          <div className="w-full">
            <div className="hidden text-3xl md:block">
              ベルエステート株式会社
            </div>
            <div className="block text-3xl md:hidden">
              ベルエステート
              <br />
              株式会社
            </div>
            <div className="mt-4 text-lg whitespace-pre-wrap">
              ベルエステートではお客様が幸せになる
              <br />
              お住まいをご提供します
            </div>
            <address className="flex flex-col mt-6 space-y-1">
              <div>
                愛知県名古屋市中村区則武1-7-15
                <br />
                ダイソー18号館302号室
              </div>
              <a href="tel:+81527563072">052-756-3072</a>
              <a href="fax:+81527563073">052-756-3073</a>
            </address>
          </div>
          <div className="md:w-1/3">
            <div className="text-4xl">リンク</div>
            <div className="flex flex-col mt-4 space-y-2">
              <a href="/">トップページ</a>
              <a href="/company">会社概要</a>
              <a href="/contact">お問合わせ</a>
              <a href="/privacy">プライバシーポリシー</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="container flex justify-center mx-auto my-2 font-medium text-white">
          ©ベルエステート株式会社
        </div>
      </div>
    </footer>
  )
}

export default Footer
