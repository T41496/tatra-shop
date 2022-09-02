import { FC } from 'react'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import { Github } from '@components/icons'
import { Logo, Container } from '@components/ui'
import s from './Footer.module.css'
import { useTranslations } from 'next-intl'

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

  const t = useTranslations('footer')

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-[1.5rem] bg-[#161616]">
          <div>
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24 items-end">
                <Logo className="max-w-[4.5rem]" />
                <span className="text-white font-normal pl-[2rem]">
                  {t('text')}
                </span>
              </a>
            </Link>
          </div>
          <div className="flex justify-left md:justify-center mt-5 md:mt-0">
            <ul>
              <li className="pb-1">
                <Link href="/search">
                  <a className="text-white font-normal text-lg">
                    {t('catalog')}
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/blogs">
                  <a className="text-white font-normal text-lg">{t('blog')}</a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/about">
                  <a className="text-white font-normal text-lg">
                    {t('about_us')}
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/">
                  <a className="text-white font-normal text-lg">
                    {t('contact_us')}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-left md:justify-center">
            <ul>
              <li className="pb-1">
                <Link href="/tos">
                  <a className="text-white font-normal text-lg">
                    {t('business_terms_and_conditions')}
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/shipping">
                  <a className="text-white font-normal text-lg">
                    {t('shipping_and_payment')}
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/privacy">
                  <a className="text-white font-normal text-lg">
                    {t('privacy_policy')}
                  </a>
                </Link>
              </li>
              <li className="pb-1">
                <Link href="/refund">
                  <a className="text-white font-normal text-lg">
                    {t('refund_and_Returns')}
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
          <Link href="https://www.instagram.com/tatrahills/" target="_blank">
            <a className="mx-[1rem]">
              <img src="/instagram-icon.svg" alt="instagram" className="w-8" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/tatrahills.sk/" target="_blank">
            <a className="mx-[1rem]">
              <img src="/facebook-icon.svg" alt="facebook" className="w-10" />
            </a>
          </Link>
        </div>
        <div className="pt-[1.2rem] pb-[1rem] flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div className="m-auto">
            <span className="font-medium text-white">
              {t('title')} &copy; {currentYear} {t('all_rights_reserved')}
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
