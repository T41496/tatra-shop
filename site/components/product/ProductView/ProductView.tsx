import cn from 'clsx'
import s from './ProductView.module.css'
import Link from 'next/link'
import { FC } from 'react'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import { WishlistButton } from '@components/wishlist'
import { ProductSlider, ProductCard } from '@components/product'
import { Container, Text } from '@components/ui'
import { SEO } from '@components/common'
import ProductSidebar from '../ProductSidebar'
import ProductTag from '../ProductTag'
import ProductDescription from '../ProductDescription'
import 'keen-slider/keen-slider.min.css'
import SimilarProducts from '@components/product/SimilarProducts'
interface ProductViewProps {
  product: Product
  relatedProducts: Product[]
}

const ProductView: FC<ProductViewProps> = ({ product, relatedProducts }) => {
  const { price } = usePrice({
    amount: product.price.value,
    baseAmount: product.price.retailPrice,
    currencyCode: product.price.currencyCode!,
  })

  return (
    <>
      <Container className="max-w-none w-full" clean>
        <div className={cn(s.root, 'fit')}>
          <div className={cn(s.main, 'fit')}>
            <div className={s.sliderContainer}>
              <ProductSlider key={product.id}>
                {product.images.map((image, i) => (
                  <div key={image.url} className={s.imageContainer}>
                    <img
                      className={s.img}
                      src={image.url!}
                      alt={image.alt || 'Product Image'}
                    />
                  </div>
                ))}
              </ProductSlider>
            </div>
          </div>

          <ProductSidebar
            key={product.id}
            product={product}
            price={price}
            className={s.sidebar}
          />
        </div>
        <div>
          <ProductDescription />
        </div>
        <section className="px-6 mb-[5rem] md:mt-[10rem]">
          <SimilarProducts />
        </section>
      </Container>
      <SEO
        title={product.name}
        description={product.description}
        openGraph={{
          type: 'website',
          title: product.name,
          description: product.description,
          images: [
            {
              url: product.images[0]?.url!,
              width: '800',
              height: '600',
              alt: product.name,
            },
          ],
        }}
      />
    </>
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

export default ProductView
