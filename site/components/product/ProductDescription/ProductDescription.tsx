import Image from 'next/image'
import React from 'react'

const ProductDescription = () => {
  return (
    <div className=" px-8">
      <h1 className="text-[30px] font-medium pt-20 pb-10">
        Product description
      </h1>
      <div className="border border-[#C9C9C9] py-10 px-10">
        <div className="flex gap-x-6 mb-6">
          <div>
            <Image src="/scissor.svg" alt="" width={45} height={45} />
          </div>
          <div className="flex self-center ">
            <p className="text-xl text-[#161616] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales a
              dolor, ut lacus erat. Purus diam et risus elementum elementum.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 mb-6">
          <div>
            <Image src="/ruler&pen.svg" alt="" width={45} height={45} />
          </div>
          <div className="flex self-center ">
            <p className="text-xl text-[#161616] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales a
              dolor, ut lacus erat. Purus diam et risus elementum elementum.
            </p>
          </div>
        </div>
        <div className="flex gap-x-6 ">
          <div>
            <Image src="/archive-tick.svg" alt="" width={45} height={45} />
          </div>
          <div className="flex self-center ">
            <p className="text-xl text-[#161616] font-normal">
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
