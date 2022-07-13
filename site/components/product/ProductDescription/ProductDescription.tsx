import React, { useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

const ProductDescription = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  const [open, setOpen] = useState(false)
  const t = useTranslations('productdescription')

  return (
    <div className=" px-5 md:px-8">
      <h1 className=" hidden mt-[60px] md:mt-[10rem] mb-10 md:block text-4xl md:text-4xl font-medium text-[#161616]">
        {t('text')}
      </h1>
      <div
        onClick={() => setOpen(!open)}
        className="flex md:hidden justify-between cursor-pointer bg-[#F1F1F1] py-6 px-4 mt-[60px] md:mt-[10rem] mb-10"
      >
        <h1 className=" text-xl md:text-[40px] font-medium text-[#161616]">
          {t('text')}
        </h1>
        <div
          className={`flex self-center transition-all duration-300 ${
            open === true
              ? 'transform rotate-[0deg]'
              : 'transform rotate-[180deg]'
          }`}
        >
          <img src="/arrowIcon.svg" alt="" />
        </div>
      </div>
      <div
        className={`md:border md:border-[#C9C9C9] md:py-10  md:px-10 ${
          open === true ? 'open' : 'collapse'
        }`}
      >
        <div className="flex gap-x-3 md:gap-x-6 mb-6">
          <div className=" min-w-[30px] md:min-w-[45px]">
            <Image
              src="/scissor.svg"
              alt=""
              width={isMobile ? 30 : 45}
              height={isMobile ? 30 : 45}
            />
          </div>
          <div className="flex self-center ">
            <p className="text-xs md:text-[1.25rem] leading-[30px] text-[#161616] font-normal">
              {t('description_1')}
            </p>
          </div>
        </div>
        <div className="flex gap-x-3 md:gap-x-6 mb-6">
          <div className=" min-w-[30px] md:min-w-[45px]">
            <Image
              src="/ruler&pen.svg"
              alt=""
              width={isMobile ? 30 : 45}
              height={isMobile ? 30 : 45}
            />
          </div>
          <div className="flex self-center ">
            <p className=" text-sm  md:text-[1.25rem] leading-[30px] text-[#161616] font-normal">
              {t('description_2')}
            </p>
          </div>
        </div>
        <div className="flex gap-x-3 md:gap-x-6 ">
          <div className=" min-w-[30px] md:min-w-[45px]">
            <Image
              src="/archive-tick.svg"
              alt=""
              width={isMobile ? 30 : 45}
              height={isMobile ? 30 : 45}
            />
          </div>
          <div className="flex self-center ">
            <p className="text-sm md:text-[1.25rem]  leading-[30px] text-[#161616] font-normal">
              {t('description_3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
