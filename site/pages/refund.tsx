import { Container } from '@components/ui'
import { Layout } from '@components/common'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Refund() {
  const t = useTranslations('refund')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('title-1')}
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description-1')}
              <br />
              <br />

              <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
                {t('title-2')}
              </p>
              <br />

              <ol className="list-decimal">
                <li className="mb-6"> {t('rules.rule-1')}</li>
                <li className="mb-6"> {t('rules.rule-2')}</li>
                <li className="mb-6"> {t('rules.rule-3')}</li>
                <li className="mb-6"> {t('rules.rule-4')}</li>
              </ol>
              {t('decription-3')}
              <br />
              <br />
              <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
                {t('title-3')}
              </p>
              <br />
              {t('description-4')}
              <br />
              <br />
              <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
                {t('title-4')}
              </p>
              <br />
              {t('description-5')}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
Refund.Layout = Layout
