import cn from 'clsx'
import type { SearchPropsType } from '@lib/search-props'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import ClickOutside from '@lib/click-outside'

import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Container, Skeleton } from '@components/ui'
import { ChevronUp, Plus, Minus } from '@components/icons'
import { Range, getTrackBackground } from 'react-range'

import useSearch from '@framework/product/use-search'

import getSlug from '@lib/get-slug'
import rangeMap from '@lib/range-map'

const SORT = {
  'trending-desc': 'Trending',
  'latest-desc': 'Latest arrivals',
  'price-asc': 'Low to high',
  'price-desc': 'High to low',
}

import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'
import { divide } from 'lodash'

export default function Search({ categories, brands }: SearchPropsType) {
  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)
  const [display, setDisplay] = useState(false)
  const [sorting, setSorting] = useState('')

  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort } = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  const query = filterQuery({ sort })

  const { pathname, category, brand } = useSearchMeta(asPath)
  const activeCategory = categories.find((cat: any) => cat.slug === category)
  const activeBrand = brands.find(
    (b: any) => getSlug(b.node.path) === `brands/${brand}`
  )?.node

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    categoryId: activeCategory?.id,
    brandId: (activeBrand as any)?.entityId,
    sort: typeof sort === 'string' ? sort : '',
    locale,
  })

  const handleClick = (event: any, filter: string) => {
    if (filter !== activeFilter) {
      setToggleFilter(true)
    } else {
      setToggleFilter(!toggleFilter)
    }
    setActiveFilter(filter)
  }

  const activeSort = (value: HTMLElement) => {
    setSorting(value.innerHTML)
    setDisplay(false)
  }

  const filterNames = ['Gender', 'Product category', 'Brand', 'Price', 'Size']
  const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

  const STEP = 1
  const MIN = 0
  const MAX = 1000
  const [values, setValues] = useState([0, 200])
  const [toggleThisElement, setToggleThisElement] = useState(false)

  return (
    <>
      <div className="bg-[url('/catalog-bg.png')] bg-cover h-60"></div>
      <Container>
        <div className="flex space-between justify-between">
          <div className="w-[calc(50%-10px)] md:0">
            <div className="block md:hidden pt-[1.5rem]">
              <span className="rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={(e) => handleClick(e, 'categories')}
                  className="flex justify-between w-full rounded-sm border border-[#C9C9C9] px-4 py-3 bg-accent-0 text-sm leading-5 font-medium hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {activeCategory?.name
                    ? `Category: ${activeCategory?.name}`
                    : 'All Categories'}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div className="w-[calc(50%-10px)] md:w-full">
            <ClickOutside active={display} onClick={() => setDisplay(false)}>
              <div className="pt-[1.5rem] md:pb-[1.5rem]">
                <div className="flex items-center relative justify-end">
                  <div
                    className="cursor-pointer flex h-[3rem] w-[12rem] items-center p-[1rem] border border-[#C9C9C9]"
                    onClick={() => setDisplay(!display)}
                  >
                    {sorting ? sorting : 'Sort'}
                    <ChevronUp
                      className={cn(
                        'ml-[auto]',
                        display ? 'rotate-0' : 'rotate-180'
                      )}
                    />
                  </div>
                  <div className="absolute top-[3rem] right-0 shadow-lg w-[12rem] z-40 bg-white">
                    {display ? (
                      <ul>
                        {Object.entries(SORT).map(([key, text]) => (
                          <li key={key} className="">
                            <Link
                              href={{
                                pathname,
                                query: filterQuery({
                                  q,
                                  sort: key,
                                }),
                              }}
                            >
                              <a
                                onClick={(e) => {
                                  handleClick(e, 'sort'),
                                    activeSort(e.target as HTMLElement)
                                }}
                                className={
                                  'h-[3rem] px-[1rem]  items-center flex hover:bg-[#70877B] focus:bg-[#70877B] hover:text-white w-[100%]'
                                }
                              >
                                {text}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </ClickOutside>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mb-6">
          <div className="">
            {/* Categories */}
            <div className="relative inline-block w-full">
              <div
                className={`origin-top-left absolute lg:relative left-0 mt-1 w-full rounded-md z-10 mb-10 lg:block ${
                  activeFilter !== 'categories' || toggleFilter !== true
                    ? 'hidden'
                    : ''
                }`}
              >
                <div className="rounded-sm bg-accent-0 pb-10">
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <ul className="pr-0 md:pr-[4rem]">
                      {filterNames.map((name, index) => {
                        switch (name) {
                          case 'Product category':
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    Product category
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                  {toggleThisElement && (
                                    <div className="categories w-[100%]">
                                      <ul className="mt-[1rem]">
                                        {categories
                                          .slice(2, categories.length - 1)
                                          .map((cat: any) => (
                                            <li
                                              key={cat.path}
                                              className={
                                                'block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8'
                                              }
                                            >
                                              <Link
                                                href={{
                                                  pathname: getCategoryPath(
                                                    cat.path,
                                                    brand
                                                  ),
                                                  query,
                                                }}
                                              >
                                                <a
                                                  onClick={(e) =>
                                                    handleClick(e, 'categories')
                                                  }
                                                  className={cn(
                                                    'text-[#161616] font-medium text-base py-[0.25rem] inline-block',
                                                    {
                                                      'text-[#70877B]':
                                                        activeCategory?.id ===
                                                        cat.id,
                                                    }
                                                  )}
                                                >
                                                  {cat.name}
                                                </a>
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </li>
                            )
                          case 'Price':
                            return (
                              <li key={index}>
                                <div
                                  className="relative border-t  border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                </div>
                                {toggleThisElement && (
                                  <div className="categories mt-[-0.5rem]">
                                    <Range
                                      values={values}
                                      step={STEP}
                                      min={MIN}
                                      max={MAX}
                                      onChange={(values) => {
                                        console.log(values)
                                        setValues(values)
                                      }}
                                      renderTrack={({ props, children }) => (
                                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                                        <div
                                          onMouseDown={props.onMouseDown}
                                          onTouchStart={props.onTouchStart}
                                          style={{
                                            ...props.style,
                                            height: '36px',
                                            display: 'flex',
                                            width: '100%',
                                          }}
                                        >
                                          <div
                                            ref={props.ref}
                                            style={{
                                              height: '3px',
                                              width: '100%',
                                              outline: 'none',
                                              background: getTrackBackground({
                                                values,
                                                colors: [
                                                  '#161616',
                                                  '#161616',
                                                  '#161616',
                                                ],
                                                min: MIN,
                                                max: MAX,
                                              }),
                                              alignSelf: 'center',
                                            }}
                                          >
                                            {children}
                                          </div>
                                        </div>
                                      )}
                                      renderThumb={({ props, isDragged }) => (
                                        <div
                                          {...props}
                                          style={{
                                            ...props.style,
                                            height: '18px',
                                            width: '8px',
                                            backgroundColor: '#70877B',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            outline: 'none',
                                          }}
                                        >
                                          <div
                                            style={{
                                              height: '16px',
                                              width: '5px',
                                              backgroundColor: '#70877B',
                                              outline: 'none',
                                            }}
                                          />
                                        </div>
                                      )}
                                    />
                                    <div className="flex justify-between align-center pb-[1rem]">
                                      <input
                                        type="text"
                                        pattern="[0-9]*"
                                        value={values[0]}
                                        className="bg-white outline-none border border-[#C9C9C9] font-semibold h-[2.5rem] w-[calc(50%_-_7px)] px-2"
                                      />
                                      <div className="w-[5px] h-[1px] bg-[#ccc] self-center"></div>
                                      <input
                                        type="text"
                                        pattern="[0-9]*"
                                        value={values[1]}
                                        className="bg-white outline-none border border-[#C9C9C9] font-semibold h-[2.5rem] w-[calc(50%_-_7px)] px-2"
                                      />
                                    </div>
                                  </div>
                                )}
                              </li>
                            )
                          case 'Gender':
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                  {toggleThisElement && (
                                    <div className="categories w-[100%]">
                                      <ul className="mt-[1rem]">
                                        {categories
                                          .slice(0, 2)
                                          .map((cat: any) => (
                                            <li
                                              key={cat.path}
                                              className={
                                                'block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8'
                                              }
                                            >
                                              <Link
                                                href={{
                                                  pathname: getCategoryPath(
                                                    cat.path,
                                                    brand
                                                  ),
                                                  query,
                                                }}
                                              >
                                                <a
                                                  onClick={(e) =>
                                                    handleClick(e, 'categories')
                                                  }
                                                  className={cn(
                                                    'text-[#161616] font-medium text-base py-[0.25rem] inline-block',
                                                    {
                                                      'text-[#70877B]':
                                                        activeCategory?.id ===
                                                        cat.id,
                                                    }
                                                  )}
                                                >
                                                  {cat.name}
                                                </a>
                                              </Link>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </li>
                            )
                          case 'Brand':
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                  {toggleThisElement && (
                                    <div className="categories w-[100%]">
                                      <ul className="mt-[1rem]">
                                        {brands.flatMap(
                                          ({ node }: { node: any }) => (
                                            <li
                                              key={node.path}
                                              className={'block'}
                                            >
                                              <Link
                                                href={{
                                                  pathname: getDesignerPath(
                                                    node.path,
                                                    brand
                                                  ),
                                                  query,
                                                }}
                                              >
                                                <a
                                                  onClick={(e) =>
                                                    handleClick(e, 'brands')
                                                  }
                                                  className={cn(
                                                    'text-[#161616] font-medium text-base py-[0.25rem] inline-block',
                                                    {
                                                      'text-[#70877B] ':
                                                        activeBrand?.id ===
                                                        node.entityId,
                                                    }
                                                  )}
                                                >
                                                  {node.name}
                                                </a>
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </li>
                            )
                          case 'Size':
                            return (
                              <li key={index}>
                                <div
                                  className="relative border-t  border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                </div>
                                {toggleThisElement && (
                                  <div className="categories grid grid-cols-4 gap-y-[0.8rem]">
                                    {sizes.map((item, index) => {
                                      return (
                                        <div
                                          key={index}
                                          className="border border-[#C9C9C9] w-[3rem] h-[2.5rem] hover:bg-[#70877B] hover:text-white hover:border-[#70877B] flex items-center justify-center cursor-pointer  font-medium  text-base uppercase"
                                        >
                                          {item}
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                              </li>
                            )
                          default:
                            return (
                              <li key={index}>
                                <div
                                  className="relative border-t  border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between"
                                  onClick={() =>
                                    setToggleThisElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleThisElement ? <Minus /> : <Plus />}
                                </div>
                                {toggleThisElement && (
                                  <div className="categories"></div>
                                )}
                              </li>
                            )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Designs */}
            <div className="relative inline-block w-full hidden">
              <div className="lg:hidden mt-3">
                <span className="rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={(e) => handleClick(e, 'brands')}
                    className="flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-8 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {activeBrand?.name
                      ? `Design: ${activeBrand?.name}`
                      : 'All Designs'}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div
                className={`origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${
                  activeFilter !== 'brands' || toggleFilter !== true
                    ? 'hidden'
                    : ''
                }`}
              >
                <div className="rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none">
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-3">
            {(q || activeCategory || activeBrand) && (
              <div className="mb-12 transition ease-in duration-75">
                {data ? (
                  <>
                    <span
                      className={cn('animated', {
                        fadeIn: data.found,
                        hidden: !data.found,
                      })}
                    >
                      Showing {data.products.length} results{' '}
                      {q && (
                        <>
                          for "<strong>{q}</strong>"
                        </>
                      )}
                    </span>
                    <span
                      className={cn('animated', {
                        fadeIn: !data.found,
                        hidden: data.found,
                      })}
                    >
                      {q ? (
                        <>
                          There are no products that match "<strong>{q}</strong>
                          "
                        </>
                      ) : (
                        <>
                          There are no products that match the selected
                          category.
                        </>
                      )}
                    </span>
                  </>
                ) : q ? (
                  <>
                    Searching for: "<strong>{q}</strong>"
                  </>
                ) : (
                  <>Searching...</>
                )}
              </div>
            )}
            {data ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {data.products.map((product: Product) => (
                  <ProductCard
                    variant="simple"
                    key={product.path}
                    className="animated fadeIn"
                    product={product}
                    imgProps={{
                      width: 480,
                      height: 480,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {rangeMap(12, (i) => (
                  <Skeleton key={i}>
                    <div className="w-60 h-60" />
                  </Skeleton>
                ))}
              </div>
            )}{' '}
          </div>
        </div>
      </Container>
    </>
  )
}

Search.Layout = Layout
