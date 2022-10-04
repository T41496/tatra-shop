import { useKeenSlider } from 'keen-slider/react'
import React, {
  Children,
  isValidElement,
  useState,
  useRef,
  useEffect,
} from 'react'

import cn from 'clsx'
import { a } from '@react-spring/web'
import s from './ProductSlider.module.css'
import { ChevronLeft, ChevronRight } from '@components/icons'
import { useTranslations } from 'next-intl'

interface ProductSliderProps {
  children: React.ReactNode[]
  className?: string
  setFullImage: (src: string) => void
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  children,
  className = '',
  setFullImage,
}) => {
  const t = useTranslations('productslider')

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  const sliderContainerRef = useRef<HTMLDivElement>(null)
  const thumbsContainerRef = useRef<HTMLDivElement>(null)

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: () => setIsMounted(true),
    slideChanged(s) {
      const slideNumber = s.track.details.rel
      setCurrentSlide(slideNumber)

      if (thumbsContainerRef.current) {
        const $el = document.getElementById(`thumb-${slideNumber}`)
        if (slideNumber >= 3) {
          thumbsContainerRef.current.scrollLeft = $el!.offsetLeft
        } else {
          thumbsContainerRef.current.scrollLeft = 0
        }
      }
    },
  })

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault()
    }

    const slider = sliderContainerRef.current!

    slider.addEventListener('touchstart', preventNavigation)

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', preventNavigation)
      }
    }
  }, [])

  const onPrev = React.useCallback(() => slider.current?.prev(), [slider])
  const onNext = React.useCallback(() => slider.current?.next(), [slider])

  return (
    <div className={cn(s.root, className)} ref={sliderContainerRef}>
      <div
        ref={ref}
        className={cn(
          s.slider,
          { [s.show]: isMounted },
          'keen-slider col-span-3'
        )}
      >
        <div className={s.control}>
          <button
            className={cn(s.leftControl)}
            onClick={onPrev}
            aria-label={t('previous_product_image')}
          >
            <ChevronLeft />
          </button>
          <button
            className={cn(s.rightControl)}
            onClick={onNext}
            aria-label={t('next_product_image')}
          >
            <ChevronRight />
          </button>
        </div>
        {Children.map(children, (child) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,

              props: {
                ...child.props,
                onClick: () => setFullImage(child.props.children.props.src),
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`,
              },
            }
          }
          return child
        })}
      </div>
      <div className="flex flex-col gap-y-4 overflow-y-scroll md:overflow-y-hidden">
        <a.div className="flex flex-col gap-y-4 " ref={thumbsContainerRef}>
          {slider &&
            Children.map(children, (child, idx) => {
              if (isValidElement(child)) {
                return {
                  ...child,
                  props: {
                    ...child.props,
                    className: cn(child.props.className, s.thumb, {
                      [s.selected]: currentSlide === idx,
                    }),
                    id: `thumb-${idx}`,
                    onClick: () => {
                      slider.current?.moveToIdx(idx)
                    },
                  },
                }
              }
              return child
            })}
        </a.div>
      </div>

      <Arrow
        left
        className={cn(s.leftControlMobile)}
        onClick={onPrev}
        ariaLabel={t('previous_product_image')}
      />
      <Arrow
        right
        className={cn(s.rightControlMobile)}
        onClick={onNext}
        ariaLabel={t('next_product_image')}
      />
    </div>
  )
}

function Arrow(props: any) {
  const disabeld = props.disabled ? s.arrowDisabled : ''
  return (
    <svg
      onClick={props.onClick}
      className={cn(
        `mx-[0.5rem] cursor-pointer ${s.arrowSize} ${
          props.left ? 'arrow--left' : 'rotate-180'
        } ${disabeld}`,
        props.className
      )}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={props.ariaLabel}
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

export default ProductSlider
function dangerouslySetInnerHTML(
  arg0: string,
  dangerouslySetInnerHTML: any,
  arg2: { __html: JSX.Element }
) {
  throw new Error('Function not implemented.')
}
