import { Container } from '@components/ui'
import { Layout } from '@components/common'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Privacy() {
  const t = useTranslations('privacy')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('title-1')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description-1')}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
Privacy.Layout = Layout
