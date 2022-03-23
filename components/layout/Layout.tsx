import Footer from './Footer'
import Header from './Header'
import MainContent from './MainContent'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="flex flex-col min-h-screen text-black font-zen">
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </div>
    </>
  )
}

export default Layout
