import s from './SimilarProducts.module.css'
import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import cn from 'clsx'
import { useTranslations } from 'next-intl'

const SimilarProducts: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 2,
    },
  })
  const t = useTranslations('similarproducts')

  return (
    <div className="w-full ">
      <h1 className={s.title}>{t('similar_products')}</h1>
      <div className="hidden md:block">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 md:mb-20">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item.picture} width={410} height={406} alt="" />
                <h1 className={s.productName}>{item.name}</h1>
                <p className={s.Size}>Size: {item.size}</p>
                <h3 className={s.price}>{item.price}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className="block md:hidden">
        <div
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 md:mb-20 keen-slider',
            s.relatedProductsGrid
          )}
          ref={sliderRef}
        >
          {data.map((item, index) => {
            return (
              <div key={index} className="keen-slider__slide">
                <Image src={item.picture} width={410} height={406} alt="" />
                <h1 className={s.productName}>{item.name}</h1>
                <p className={s.Size}>Size: {item.size}</p>
                <h3 className={s.price}>{item.price}</h3>
              </div>
            )
          })}
        </div>
        {loaded && instanceRef.current && (
          <div className="arrows flex justify-center mt-[1rem]">
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 2
              }
            />
          </div>
        )}
      </div>
      <div className="flex justify-center mb-10 md:mb-20">
        <Link href={'/'}>
          <span className="text-white text-lg sm:text-2xl text-center flex justify-center items-center bg-[#70877B] w-[135px] h-[40px] sm:w-[280px] sm:h-[80px] cursor-pointer">
            {t('catalog')}
          </span>
        </Link>
      </div>
    </div>
  )
}

function Arrow(props: any) {
  const disabeld = props.disabled ? s.arrowDisabled : ''
  return (
    <svg
      onClick={props.onClick}
      className={`cursor-pointer ${s.arrowSize} ${
        props.left ? 'arrow--left' : 'rotate-180'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.left && (
        <path d="M0.293922 8.70711C-0.0965996 8.31658 -0.0965996 7.68342 0.293922 7.29289L6.65788 0.928932C7.04841 0.538408 7.68157 0.538408 8.0721 0.928932C8.46262 1.31946 8.46262 1.95262 8.0721 2.34315L2.41525 8L8.0721 13.6569C8.46262 14.0474 8.46262 14.6805 8.0721 15.0711C7.68157 15.4616 7.04841 15.4616 6.65788 15.0711L0.293922 8.70711ZM51.5273 9H1.00103V7H51.5273V9Z" />
      )}
      {!props.left && (
        <path d="M0.293922 8.70711C-0.0965996 8.31658 -0.0965996 7.68342 0.293922 7.29289L6.65788 0.928932C7.04841 0.538408 7.68157 0.538408 8.0721 0.928932C8.46262 1.31946 8.46262 1.95262 8.0721 2.34315L2.41525 8L8.0721 13.6569C8.46262 14.0474 8.46262 14.6805 8.0721 15.0711C7.68157 15.4616 7.04841 15.4616 6.65788 15.0711L0.293922 8.70711ZM51.5273 9H1.00103V7H51.5273V9Z" />
      )}
    </svg>
  )
}

export default SimilarProducts

const data = [
  {
    picture: '/assets/image 40.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 41.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 42.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 43.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
]
