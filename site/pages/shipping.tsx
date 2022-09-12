import { Container } from '@components/ui'
import { Layout } from '@components/common'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Shipping() {
  const t = useTranslations('shipping')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('title-1')}
            </p>
            <br />
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description-1')}
            </p>
            <br />
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('method-title')}
            </p>
            <br />
            <ul className="ml-6">
              <li> {t('method.method-1')}</li>
              <li> {t('method.method-2')}</li>
            </ul>
            <br />
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('method-title-1')}
            </p>
            <br />
            <ul className="ml-6">
              <li> {t('method-1.method-1')}</li>
            </ul>
            <br />
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('method-title-2')}
            </p>
            <br />
            <ul className="ml-6">
              <li> {t('method-2.method-1')}</li>
            </ul>
            <br />
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('title-2')}
            </p>
            <br />
            {t('description-2')}
            <br />
            {t('description-3')}
          </div>
        </div>
      </Container>
    </div>
  )
}
Shipping.Layout = Layout
