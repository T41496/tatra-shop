import { useState } from 'react'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import s from './Banner.module.css'
import { useTranslations } from 'next-intl'

export const Banner = () => {
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
  })

  const t = useTranslations('banner')

  return (
    <>
      <style>{`
      .keen-slider,
      .keen-slider__slide {
          height: 100%;
      }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(50vh_-_52px)] md:h-[calc(100vh_-_104px)] mb-[calc(50vh_+_104px)] md:mb-[9rem]">
        <div className="bg-[#70877B] flex justify-center h-[inherit] p-6">
          <div className="flex flex-col self-center">
            <h1 className="text-white font-bold text-4xl uppercase">
              {t('header')}
            </h1>
            <p className="text-white text-2xl font-normal max-w-[21rem] mt-2">
              {t('description')}
            </p>
            <Link href="/search">
              <a className="uppercase text-[#70877B] bg-[#FFFFFF] mr-auto mt-8 px-11 py-2 text-2xl font-medium">
                {t('button')}
              </a>
            </Link>
          </div>
        </div>
        <div className="col-span-2 h-[inherit] mt-[26px] md:mt-[0px]">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[inherit] p-6 md:p-0">
                <div
                  className={`bg-[url('/assets/banner/photo-1.png')] bg-cover`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-2.png')] bg-cover hidden md:block`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-3.png')] bg-cover hidden md:block`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-4.png')] bg-cover hidden md:block`}
                ></div>
              </div>
            </div>
            <div className="keen-slider__slide">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[inherit] p-6 md:p-0">
                <div
                  className={`bg-[url('/assets/banner/photo-5.png')] bg-cover`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-4.png')] bg-cover hidden md:block`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-1.png')] bg-cover hidden md:block`}
                ></div>
                <div
                  className={`bg-[url('/assets/banner/photo-8.png')] bg-cover hidden md:block`}
                ></div>
              </div>
            </div>
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
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function Arrow(props: any) {
  const disabeld = props.disabled ? s.arrowDisabled : ''
  return (
    <svg
      onClick={props.onClick}
      className={`mx-[0.5rem] cursor-pointer ${s.arrowSize} ${
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

export default Banner
