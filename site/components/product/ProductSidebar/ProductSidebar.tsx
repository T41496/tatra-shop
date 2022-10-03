import s from './ProductSidebar.module.css'
import cn from 'clsx'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'
import { useTranslations } from 'next-intl'

interface ProductSidebarProps {
  product: Product
  className?: string
  price: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({
  product,
  className,
  price,
}) => {
  const t = useTranslations('productsidebar')

  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions)
  }, [product])

  const variant = getProductVariant(product, selectedOptions)
  const addToCart = async () => {
    setLoading(true)
    try {
      await addItem({
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0]?.id),
      })
      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <div className={cn('px-6 md:pl-0 mt-10 md:mt-0', className)}>
      <h1 className=" text-[1.8rem] md:text-[1.8rem]  font-medium uppercase text-[#161616]">
        {product.name}
      </h1>
      <h2 className=" text-[30px] md:text-[1.8rem] mt-[0.5rem] uppercase font-exo2 font-semibold text-[#70877B] mb-8">
        {`${price} `}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      <div className=" mb-[12px] md:mb-[auto]">
        <ProductOptions
          options={product.options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>

      <div>
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label={t('add_to_cart')}
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? t('not_available')
              : t('add_to_cart')}
          </Button>
        )}
      </div>
      <div className="flex gap-x-3 mt-6">
        <span className=" flex self-center w-[14px] h-[14px] rounded-full bg-[#70877B] leading-[1rem]"></span>
        <p className="flex self-center  text-xl md:text-[1.1rem] font-medium">
          {t('delivery_working_days')}
        </p>
      </div>
    </div>
  )
}

export default ProductSidebar
