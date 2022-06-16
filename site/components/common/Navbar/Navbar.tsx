import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container, Button } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { Menu } from '@components/icons'
import { useUI } from '@components/ui/context'

interface Link {
  href: string
  label: string
}

interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const {
    toggleSidebar,
    closeSidebarIfPresent,
    openModal,
    setSidebarView,
    openSidebar,
  } = useUI()

  return (
    <NavbarRoot>
      <Container clean className="mx-auto max-w-8xl px-6">
        <div className={s.nav}>
          <div className="flex items-center flex-none">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className={s.navMenu}>
              <Link href="/search">
                <a className={s.link}>Catalog</a>
              </Link>
              <Link href="/blog">
                <a className={s.link}>Blog</a>
              </Link>
              <Link href="/about">
                <a className={s.link}>About Us</a>
              </Link>
              {/* {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))} */}
            </nav>
          </div>
          {process.env.COMMERCE_SEARCH_ENABLED && (
            <div className="justify-center flex-1 hidden lg:flex h-full self-center">
              <Searchbar />
            </div>
          )}
          <div className="flex items-center justify-end flex-1 space-x-8">
            <img
              src="/search-icon.svg"
              alt="search icon"
              className="block md:hidden"
              onClick={function () {
                document
                  .getElementById('mobile-search')
                  ?.parentElement?.parentElement?.classList.toggle('flex')
                document
                  .getElementById('mobile-search')
                  ?.parentElement?.parentElement?.classList.toggle('hidden')
              }}
            />
            <UserNav />
            <Button
              className={s.item}
              aria-label="Menu"
              variant="naked"
              onClick={() => {
                openSidebar()
                setSidebarView('MOBILE_MENU_VIEW')
              }}
            >
              <Menu />
            </Button>
          </div>
        </div>
        {process.env.COMMERCE_SEARCH_ENABLED && (
          <div className="hidden pb-4 lg:px-6 lg:hidden">
            <Searchbar id="mobile-search" />
          </div>
        )}
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
