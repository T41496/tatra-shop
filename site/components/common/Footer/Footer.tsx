import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-3 pt-[1.5rem] bg-[#161616]">
          <div>
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24 items-end">
                <Logo className="max-w-[4.5rem]" />
                <span className="text-white font-normal pl-[2rem]">
                  Save the planet - give <br /> clothes a second life
                </span>
              </a>
            </Link>
          </div>
          <div className="flex justify-center">
            <ul>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">Catalog</a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">Blog</a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">About Us</a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <ul>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">
                    Business terms and conditions
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">
                    Shipping and payment
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">
                    Privacy policy
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">
                    Refund and Returns
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div> */}
          {/* <div className="col-span-1 lg:col-span-2 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
              >
                <Github />
              </a>
              <I18nWidget />
            </div>
          </div> */}
        </div>
        <div className="w-[100%] h-px bg-[#C9C9C9] mt-[2rem] mb-[1.5rem]"></div>
        <div className="flex items-center justify-center">
          <a href="#" className="mx-[1rem]">
            <img src="./instagram-icon.svg" alt="instagram" />
          </a>
          <a href="#" className="mx-[1rem]">
            <img src="./facebook-icon.svg" alt="facebook" />
          </a>
        </div>
        <div className="pt-[1.2rem] pb-[1rem] flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div className="m-auto">
            <span className="font-medium text-white">
              Tatra Hills &copy; {currentYear} All rights reserved.
            </span>
          </div>
          <div className="flex items-center text-primary text-sm"></div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
