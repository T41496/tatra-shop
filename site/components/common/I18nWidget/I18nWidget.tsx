import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import s from './I18nWidget.module.css'
import ClickOutside from '@lib/click-outside'

const I18nWidget: FC = () => {
  const [display, setDisplay] = useState(false)
  const {
    locale,
    locales,
    defaultLocale = 'en-US',
    asPath: currentPath,
  } = useRouter()

  // const options = locales?.filter((val) => val !== locale)
  const currentLocale = locale || defaultLocale

  const checkLang = (lang: string) => {
    switch (lang) {
      case 'en-US':
        return 'EN'
      case 'sk':
        return 'SK'
      default:
        return lang
    }
  }

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <nav className={s.root}>
        <div
          className="flex items-center relative"
          onClick={() => setDisplay(!display)}
        >
          <ul className={cn('flex', 'ml-[1.5rem]', s.langs)}>
            {locales?.map((locale) => (
              <li key={locale}>
                <Link href={currentPath} locale={locale}>
                  <a
                    className={cn(
                      s.item,
                      currentLocale === locale && s.langActive
                    )}
                    onClick={() => setDisplay(false)}
                  >
                    {checkLang(locale)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </ClickOutside>
  )
}

export default I18nWidget
