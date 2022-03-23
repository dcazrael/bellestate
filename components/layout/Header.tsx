import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const isSticky = () => {
    const header = document.querySelector('.header')
    const scrollTop = window.scrollY
    scrollTop >= 1
      ? header?.classList.add('bg-white', 'shadow')
      : header?.classList.remove('bg-white', 'shadow')
  }

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <header className="fixed z-50 flex justify-center w-full py-4 header h-28">
      <div className="container flex items-center justify-between px-8 mx-auto lg:px-20">
        <div className="w-3/4 md:w-80">
          <Image
            src="/BellEstate.svg"
            alt="ベルエステート株式会社 Logo"
            width={320}
            height={72}
          />
        </div>
        <nav className="items-center hidden space-x-4 md:flex">
          <Link href="/">
            <a>トップページ</a>
          </Link>
          <Link href="/company">
            <a>会社概要</a>
          </Link>
          <Link href="/contact">
            <a className="rounded-full border-[3px] border-transparent bg-primary px-3 py-1 font-medium text-white transition-colors duration-300 hover:border-primary hover:bg-transparent hover:text-primary">
              お問合わせ
            </a>
          </Link>
        </nav>
        <button
          aria-label="Toggle Mobile Menu Button"
          className={`ml-auto flex h-6 w-6 flex-col space-y-1 text-primary outline-none md:hidden ${
            active ? 'open' : ''
          }`}
          onClick={handleClick}
        >
          <div className="bar-one" />
          <div className="bar-two" />
          <div className="bar-three" />
        </button>
      </div>
      <nav className={`hamburger ${active ? 'open' : 'hidden'}`}>
        <Link href="/">
          <a>トップページ</a>
        </Link>
        <Link href="/company">
          <a>会社概要</a>
        </Link>
        <Link href="/contact">
          <a className="rounded-full border-[3px] border-transparent bg-primary px-3 py-1 font-medium text-white transition-colors duration-300 hover:border-primary hover:bg-transparent hover:text-primary">
            お問合わせ
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
