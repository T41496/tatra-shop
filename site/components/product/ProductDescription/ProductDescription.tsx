import React, { useState } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const ProductDescription = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  })
  const [open, setOpen] = useState(false)
  console.log(open, 'v')
  return (
    <div className=" px-5 md:px-8">
      <h1 className=" hidden mt-20 mb-10 md:block text-xl md:text-[30px] font-medium text-[#161616]">
        Product description
      </h1>
      <div
        onClick={() => setOpen(!open)}
        className="flex md:hidden justify-between cursor-pointer bg-[#F1F1F1] py-6 px-4 mt-20 mb-10"
      >
        <h1 className=" text-xl md:text-[30px] font-medium text-[#161616]">
          Product description
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
            <p className=" text-xs md:text-xl text-[#161616] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales a
              dolor, ut lacus erat. Purus diam et risus elementum elementum.
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
            <p className=" text-sm md:text-xl text-[#161616] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales a
              dolor, ut lacus erat. Purus diam et risus elementum elementum.
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
            <p className=" text-sm md:text-xl text-[#161616] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              nibh magna quis consequat cum. Etiam egestas eu suscipit egestas.
              Scelerisque nibh eleifend phasellus eu. Nunc sit sed aliquet
              egestas vel laoreet massa ultrices. Eget id ipsum sit tincidunt
              ullamcorper diam purus, eget.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription
