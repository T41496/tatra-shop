import { Container } from '@components/ui'
import { Layout } from '@components/common'
import Image from 'next/image'
import React from 'react'
import SimilarProducts from '@components/product/SimilarProducts'
import { useTranslations } from 'next-intl'
export default function About() {
  const t = useTranslations('about')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('who_are_we')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description_1')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description_2')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-10">
          <div className="md:order-first mb-10 md:mb-0">
            <div className="relative">
              <img src="/about-vlad.png" alt="Vlad" className=" md:w-[75%]" />
            </div>
          </div>
          <div className="order-last flex flex-col self-center">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('abour_vlad')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-10">
          <div className="md:order-last mb-10 md:mb-0 mt-10 md:mt-0">
            <div className="relative">
              <img
                src="/about-daria.png"
                alt="Daria"
                className="w-full md:w-[75%] md:ml-[25%]"
              />
            </div>
          </div>
          <div className="order-first flex flex-col self-center">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('abour_daria')}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center">
            <p className="text-xl md:text-[20px] text-[#161616] leading-[40px] font-normal">
              {t('description_3')}
            </p>
          </div>
        </div>
        <SimilarProducts />
      </Container>
    </div>
  )
}
About.Layout = Layout
