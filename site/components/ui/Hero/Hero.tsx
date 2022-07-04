import React, { FC } from 'react'
import { Container } from '@components/ui'
import s from './Hero.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Hero: FC = () => {
  const t = useTranslations('hero')

  return (
    <div className="mt-[8rem]">
      <Container>
        <div className={`${s.root}`}>
          <div>
            <h2 className={s.title}>{t('about_us_title')}</h2>
            <p className={s.description}>{t('about_us_description')}</p>
          </div>
          <div className="mt-[8rem] md:mt-[0rem]">
            <h2 className={s.title}>{t('why_eco_title')}</h2>
            <p className={s.description}>{t('why_eco_description')}</p>
          </div>
        </div>
        <Link href="/about">
          <a className="uppercase text-[#FFFFFF] bg-[#70877B] px-6 py-2 text-2xl w-[fit-content] mt-[3rem] text-center font-medium mx-auto block">
            {t('about_us_link')}
          </a>
        </Link>
      </Container>
    </div>
  )
}

export default Hero
