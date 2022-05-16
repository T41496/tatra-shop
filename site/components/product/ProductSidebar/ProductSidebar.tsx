import s from './ProductSidebar.module.css'
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
    <div className={className}>
      <h1 className=" text-[30px] md:text-[37px]  font-medium uppercase text-[#161616]">
        {product.name}
      </h1>
      <h2 className=" text-[30px] md:text-[37px]  uppercase font-exo2 font-semibold text-[#70877B] mb-8">
        {`${price} ${product.price?.currencyCode}`}
      </h2>
      <div className=" mb-[12px] md:mb-[100px]">
        <ProductOptions
          options={product.options}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      </div>

      <div>
        {process.env.COMMERCE_CART_ENABLED && (
          <Button
            aria-label="Add to Cart"
            type="button"
            className={s.button}
            onClick={addToCart}
            loading={loading}
            disabled={variant?.availableForSale === false}
          >
            {variant?.availableForSale === false
              ? 'Not Available'
              : 'Add To Cart'}
          </Button>
        )}
      </div>
      <div className="flex gap-x-3 mt-6">
        <span className=" flex self-center w-[17px] h-[17px] rounded-full bg-[#70877B]"></span>
        <p className="flex self-center  text-xl md:text-[22px]">
          Delivery in 3-8 working days.
        </p>
      </div>
    </div>
  )
}

export default ProductSidebar
