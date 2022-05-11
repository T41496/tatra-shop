import React, { FC } from 'react'
import { Container } from '@components/ui'
import s from './Hero.module.css'
import Link from 'next/link'

const Hero: FC = () => {
  return (
    <div className="mt-[8rem]">
      <Container>
        <div className={`${s.root}`}>
          <div>
            <h2 className={s.title}>About Us</h2>
            <p className={s.description}>
              Tatra Hills is a brand based on quality, environmental
              friendliness, and reliability. Thank to this, the tourists get
              comfort, and the athletes get victory. We value not only the
              process, but the final result as well. We appreciate the trust of
              those who choose us, and we also care about the planet!
            </p>
          </div>
          <div>
            <h2 className={s.title}>Why Eco</h2>
            <p className={s.description}>
              So, why choose Recycled Clothing? In the world of fast fashion,
              where trends consistently come and go, a whopping 12.8 million
              tons of discarded clothing end up in Europe landfills every year.
              Our goal is to reduce clothing production as 70% of products can
              be reused without losing quality and functionality. Less old
              clothes in landfills.
            </p>
          </div>
        </div>
        <Link href="/">
          <a className="uppercase text-[#FFFFFF] bg-[#70877B] px-6 py-2 text-2xl w-[fit-content] mt-[3rem] text-center font-medium mx-auto block">
            Read more
          </a>
        </Link>
      </Container>
    </div>
  )
}

export default Hero
