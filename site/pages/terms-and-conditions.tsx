import { Container } from '@components/ui'
import { Layout } from '@components/common'
import Image from 'next/image'
import React from 'react'
import SimilarProducts from '@components/product/SimilarProducts'
import { useTranslations } from 'next-intl'
export default function TermsAndConditions() {
  const t = useTranslations('termsandconditions')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 mb-5">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('how_my_order_will_delivered')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('how_my_order_will_delivered_description_1')}
              <br />
              {t('how_my_order_will_delivered_description_2')}
              <br />
              {t('how_my_order_will_delivered_description_3')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-5">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('within_slovakia')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('within_slovakia_1')}
              <br />
              {t('within_slovakia_2')}
              <br />
              {t('within_slovakia_3')}
              <br />
              {t('within_slovakia_4')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-5">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('to_czech')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('to_czech_1')}
              <br />
              {t('to_czech_2')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-5">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('how_can_you_pay_order')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('how_can_you_pay_order_description_1')}
              <br />
              {t('how_can_you_pay_order_description_2')}
              <br />
              <br />
              {t('how_can_you_pay_order_description_email')}
            </p>
          </div>
        </div>
        <SimilarProducts />
      </Container>
    </div>
  )
}
TermsAndConditions.Layout = Layout
