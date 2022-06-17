import { Container } from '@components/ui'
import { Layout } from '@components/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SimilarProducts from '@components/product/SimilarProducts'
export default function Blogs() {
  return (
    <div className="mt-10">
      <Container>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mb-20 md:mb-32"
            >
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
                <div>
                  <Link href="/blog-detail">
                    <span className=" text-xl md:text-[28px] text-[#70877B] leading-[40px] md:leading-[48px] font-normal cursor-pointer">
                      Read more...
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
        <SimilarProducts />
      </Container>
    </div>
  )
}
Blogs.Layout = Layout

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
        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke’s
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back.
      </p>
    ),
  },
  {
    picture: '/assets/s.png',
    title: 'Arteryx',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Originaly named Rock Solid by founder Dave Lane, the company's first
        line of products was climbing gear. Dave Lane sold his 50% interest to
        Blair Murdoch and Tim Duholke who became silent partners in 1989.
        Then-principal Jeremy Guard changed the company name to "Arc'teryx" in
        1991 to reflect the company's vision of creating disruptive
        "evolutionary" innovation within the outdoor products industry.
      </p>
    ),
  },
  {
    picture: '/assets/brown-wooden-house-trees-body-water-during-winter 5.png',
    title: 'Fjallraven',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Fjällräven was born out of one man’s vision: a vision to make nature
        accessible to more people.
        <br />
        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke’s
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back.
      </p>
    ),
  },
  {
    picture: '/assets/s.png',
    title: 'Arteryx',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Originaly named Rock Solid by founder Dave Lane, the company's first
        line of products was climbing gear. Dave Lane sold his 50% interest to
        Blair Murdoch and Tim Duholke who became silent partners in 1989.
        Then-principal Jeremy Guard changed the company name to "Arc'teryx" in
        1991 to reflect the company's vision of creating disruptive
        "evolutionary" innovation within the outdoor products industry.
      </p>
    ),
  },
  {
    picture: '/assets/brown-wooden-house-trees-body-water-during-winter 5.png',
    title: 'Fjallraven',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Fjällräven was born out of one man’s vision: a vision to make nature
        accessible to more people.
        <br />
        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke’s
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back.
      </p>
    ),
  },
  {
    picture: '/assets/s.png',
    title: 'Arteryx',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Originaly named Rock Solid by founder Dave Lane, the company's first
        line of products was climbing gear. Dave Lane sold his 50% interest to
        Blair Murdoch and Tim Duholke who became silent partners in 1989.
        Then-principal Jeremy Guard changed the company name to "Arc'teryx" in
        1991 to reflect the company's vision of creating disruptive
        "evolutionary" innovation within the outdoor products industry.
      </p>
    ),
  },
  {
    picture: '/assets/brown-wooden-house-trees-body-water-during-winter 5.png',
    title: 'Fjallraven',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Fjällräven was born out of one man’s vision: a vision to make nature
        accessible to more people.
        <br />
        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke’s
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back.
      </p>
    ),
  },
  {
    picture: '/assets/s.png',
    title: 'Arteryx',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Originaly named Rock Solid by founder Dave Lane, the company's first
        line of products was climbing gear. Dave Lane sold his 50% interest to
        Blair Murdoch and Tim Duholke who became silent partners in 1989.
        Then-principal Jeremy Guard changed the company name to "Arc'teryx" in
        1991 to reflect the company's vision of creating disruptive
        "evolutionary" innovation within the outdoor products industry.
      </p>
    ),
  },
  {
    picture: '/assets/brown-wooden-house-trees-body-water-during-winter 5.png',
    title: 'Fjallraven',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Fjällräven was born out of one man’s vision: a vision to make nature
        accessible to more people.
        <br />
        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.
        Combining rolling hills, deep forests and sheltered coastline it was the
        perfect playground for a young, curious Åke. And it was on one of his
        many adventures that the seed for Fjällräven was planted, deep in Åke’s
        mind. The idea arose out of necessity: to create a backpack that
        swallowed up gear, but sat comfortably on his back.
      </p>
    ),
  },
  {
    picture: '/assets/s.png',
    title: 'Arteryx',
    subTitle: 'history',
    description: (
      <p className=" text-xl md:text-[26px] text-[#161616] leading-[40px] md:leading-[48px] font-normal">
        Originaly named Rock Solid by founder Dave Lane, the company's first
        line of products was climbing gear. Dave Lane sold his 50% interest to
        Blair Murdoch and Tim Duholke who became silent partners in 1989.
        Then-principal Jeremy Guard changed the company name to "Arc'teryx" in
        1991 to reflect the company's vision of creating disruptive
        "evolutionary" innovation within the outdoor products industry.
      </p>
    ),
  },
]
