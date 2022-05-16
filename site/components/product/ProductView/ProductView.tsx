import cn from 'clsx'
import Image from 'next/image'
import s from './ProductView.module.css'
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
        <section className="py-12 px-6 mb-10">
          <h1 className="text-[30px] md:text-[40px] text-[#161616] font-medium pb-10">
            Similar products
          </h1>
          <div className={s.relatedProductsGrid}>
            {relatedProducts.map((p) => (
              <div
                key={p.path}
                className="animated fadeIn bg-accent-0 border border-accent-2"
              >
                <ProductCard
                  noNameTag
                  product={p}
                  key={p.path}
                  variant="simple"
                  className="animated fadeIn"
                  imgProps={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
            ))}
          </div>
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

export default ProductView
