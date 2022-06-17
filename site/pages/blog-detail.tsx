import { Container } from '@components/ui'
import { Layout } from '@components/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SimilarProducts from '@components/product/SimilarProducts'
export default function BlogDetail() {
  return (
    <div className="mt-10">
      <Container>
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-20">
                <div
                  className={
                    index % 2 === 0
                      ? 'md:order-first mb-10 md:mb-0'
                      : 'md:order-last mb-10  md:mb-0'
                  }
                >
                  <div className="relative">
                    <Image
                      src={item.picture}
                      alt={item.title}
                      width={860}
                      height={896}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)]">
                      <div className="flex flex-col justify-center items-center h-full w-full">
                        <h1 className="text-white text-[20px]  md:text-[60px] text-center uppercase ">
                          {item.title}
                        </h1>
                        <h1 className="text-white text-[20px]  md:text-[60px] text-center uppercase w-full pb-3 max-w-[250px] nd:max-w-[500px] mx-auto border-b">
                          {item.subTitle}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={` ${
                    index % 2 === 0 ? 'order-last' : 'order-first'
                  }flex flex-col self-center `}
                >
                  {item.description}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-5 mb-20">
                <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
                  Åke knew there must be a way. With his mother's sewing machine
                  and his father's tools, Åke created a wooden-framed backpack
                  in his basement. And with it, the seed was sown. 10 years
                  later, in 1960, in that same basement, Åke founded Fjällräven
                  and launched his first product for sale. Guess what is was?
                  Yep, a backpack; this time with an aluminium frame.
                  <br />
                  <br />
                  During the 1960s and 70s, fuelled by Ake's stubborn belief
                  that there must always be a way - a practical solution -the
                  Fjällräven product range expanded significantly, with tents,
                  sleeping bags, jackets and trousers. The Greenland Jacket, the
                  Expedition Down Jacket and the Kånken backpack proved to be
                  defining products. Virtually every other Swede, from avid
                  trekker to enthusiastic nature lover, wore and trusted
                  Fjällräven.
                  <br />
                  <br />
                  <div className="unset-img">
                    <Image
                      alt="Blog description"
                      src="/blog-detail-1.png"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                  <br />
                  The 80s and gos were more about geographical expansion.
                  Trekking through nature, going slowly, carrying everything you
                  need on your back while enjoying every step, shouldn't just be
                  something for Swedes. First we expanded throughout
                  Scandinavia, then further afield in Europe. But it wasn't
                  enough for Åke to just offer the clothing and equipment to get
                  out in nature. His dream was to actually enable people to get
                  out there. He wanted more people to trek through the
                  wilderness; because the more people experience nature, the
                  more likely they are to care for it. And again, he knew there
                  must be a way. His dream became a reality in 2005 with the
                  launch of Fjällräven Classic: a 110km-long trek through
                  northern Sweden.
                  <br />
                  <br />
                  And with nature being so important to us, here at Fjällräven,
                  we've placed more and more emphasis on sustainable
                  development; to develop on nature's terms. Since the new
                  millennium, we've launched EcoShell, our Down Promise and the
                  Fjällräven Way - our Code of Conduct.
                  <br />
                  <br />
                  <div className="unset-img">
                    <Image
                      alt="Blog description"
                      src="/blog-detail-2.png"
                      layout="fill"
                      className="custom-img"
                    />
                  </div>
                  <br />
                  Then in 2017 we became very nostalgic. We returned to where
                  Åke first drew inspiration, the Swedish mountains, to create
                  our mountaineering collection: Bergtagen. And now, in 2018,
                  we're revisiting that first defining product, the Greenland
                  Jacket and the collection it forged, to create Greenland
                  Updated.
                  <br />
                  <br />
                  But whether we're looking forward, backwards or sideways for
                  inspiration, we're always moving towards a common goal.
                  Enabling and inspiring more people to experience nature was
                  Åke's vision and we now make it our mission. Nature is in our
                  DNA. We simply can't deviate from it. Without it, we'd be
                  nothing. It is our past, present and future. It's our forever.
                </p>
              </div>
            </div>
          )
        })}
        <SimilarProducts />
      </Container>
    </div>
  )
}
BlogDetail.Layout = Layout

const data = [
  {
    picture: '/assets/brown-wooden-house-trees-body-water-during-winter 5.png',
    title: 'Fjallraven',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Fjällräven was born out of one man’s vision: a vision to make nature
        accessible to more people.
        <br />
        <br />
        Åke Nordin was born in Örnsköldsvik, on Sweden's High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke's
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back. Fjällräven was born
        out of one man's vision: a vision to make nature accessible to more
        people.
      </p>
    ),
  },
]
