import cn from 'clsx'
import type { SearchPropsType } from '@lib/search-props'
import Link from 'next/link'
import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import ClickOutside from '@lib/click-outside'

import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Container, Skeleton } from '@components/ui'
import { ChevronUp, Plus, Minus } from '@components/icons'
import { Range, getTrackBackground } from 'react-range'
import { Cross } from '@components/icons'

import useSearch from '@framework/product/use-search'

import getSlug from '@lib/get-slug'
import rangeMap from '@lib/range-map'
import { useTranslations } from 'next-intl'

import {
  filterQuery,
  getCategoryPath,
  getDesignerPath,
  useSearchMeta,
} from '@lib/search'
import { divide } from 'lodash'

export default function Search({ categories, brands }: SearchPropsType) {
  const t = useTranslations('search')

  const SORT = {
    'trending-desc': t('trending'),
    'latest-desc': t('latest_arrivals'),
    'price-asc': t('low_to_high'),
    'price-desc': t('high_to_low'),
  }

  const [activeFilter, setActiveFilter] = useState('')
  const [toggleFilter, setToggleFilter] = useState(false)
  const [display, setDisplay] = useState(false)
  const [sorting, setSorting] = useState('')

  const router = useRouter()
  const { asPath, locale } = router
  const { q, sort, price_min, price_max, g, c, b } = router.query
  const routeQuery = router.query
  // `q` can be included but because categories and designers can't be searched
  // in the same way of products, it's better to ignore the search input if one
  // of those is selected
  const query = filterQuery({ q, sort, price_min, price_max, g, c, b })

  const tagsGender: Any[] = []
  const slugsGender =
    typeof g === 'undefined' ? [] : [...new Set(String(g).split(','))]
  slugsGender.map((item, index) => {
    tagsGender.push(categories.find((cat: any) => cat.slug === item))
  })

  const tagsCategory: Any[] = []
  const slugsCategory =
    typeof c === 'undefined' ? [] : [...new Set(String(c).split(','))]
  slugsCategory.map((item, index) => {
    tagsCategory.push(categories.find((cat: any) => cat.slug === item))
  })

  const categoryIds: Number[] = []
  if (tagsGender.length > 0) {
    tagsGender.map((item, index) => {
      categoryIds.push(Number(item.id))
    })
  }
  if (tagsCategory.length > 0) {
    tagsCategory.map((item, index) => {
      categoryIds.push(Number(item.id))
    })
  }

  const { pathname, category, brand } = useSearchMeta(asPath)
  const activeGender = categories.find((cat: any) => cat.slug === g)
  const activeCategory = categories.find((cat: any) => cat.slug === c)
  const activeBrand = brands.find(
    (_b: any) => getSlug(_b.node.path) === b
  )?.node

  const { data } = useSearch({
    search: typeof q === 'string' ? q : '',
    categoryIds: categoryIds.filter((a) => a).join(),
    brandId: (activeBrand as any)?.entityId,
    sort: typeof sort === 'string' ? sort : '',
    locale,
    priceMin: typeof price_min === 'string' ? price_min : '',
    priceMax: typeof price_max === 'string' ? price_max : '',
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

  const filterNames = [
    t('gender'),
    t('product_category'),
    t('brand'),
    t('price'),
    t('size'),
    t('reset_all'),
  ]

  console.log(filterNames)
  const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

  const STEP = 1
  const MIN = 0
  const MAX = 1000
  const [values, setValues] = useState([0, 200])
  const [toggleThisElement, setToggleThisElement] = useState(false)
  const [toggleGenderElement, setToggleGenderElement] = useState(false)
  const [togglePriceElement, setTogglePriceElement] = useState(false)
  const [toggleProductCategoryElement, setToggleProductCategoryElement] =
    useState(false)
  const [toggleBrandElement, setToggleBrandElement] = useState(false)
  const [toggleSizeElement, setToggleSizeElement] = useState(false)

  return (
    <>
      <div className="bg-[url('/catalog-bg.png')] bg-cover h-60"></div>
      <Container>
        <div className="flex space-between justify-between">
          <div className="w-[calc(50%-10px)] md:w-[calc(100%-200px)]">
            <div className="hidden md:block pt-[1.5rem]">
              {tagsGender.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#C9C9C9] font-medium text-[1rem] inline-block p-2 pr-10 mr-2 mb-2 relative"
                  >
                    {t(item.slug)}
                    <button
                      onClick={(e) => {
                        tagsGender.splice(index, 1)
                        let genderIds: String[] = []
                        tagsGender.map((item, index) => {
                          genderIds.push(item.slug)
                        })
                        router.push(
                          {
                            pathname,
                            query: filterQuery({
                              q,
                              g: String(genderIds.toString()),
                              c,
                              b,
                              sort,
                              price_min,
                              price_max,
                            }),
                          },
                          '',
                          { scroll: false }
                        )
                      }}
                      className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none cursor-pointer"
                    >
                      <Cross className="h-6 w-6 absolute top-2 right-2" />
                    </button>
                  </div>
                )
              })}
              {tagsCategory.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#C9C9C9] font-medium text-[1rem] inline-block p-2 pr-10 mr-2 mb-2 relative"
                  >
                    {item.name}
                    <button
                      onClick={(e) => {
                        tagsCategory.splice(index, 1)
                        let categoryIds: String[] = []
                        tagsCategory.map((item, index) => {
                          categoryIds.push(item.slug)
                        })
                        router.push(
                          {
                            pathname,
                            query: filterQuery({
                              q,
                              g,
                              c: String(categoryIds.toString()),
                              b,
                              sort,
                              price_min,
                              price_max,
                            }),
                          },
                          '',
                          { scroll: false }
                        )
                      }}
                      className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none cursor-pointer"
                    >
                      <Cross className="h-6 w-6 absolute top-2 right-2" />
                    </button>
                  </div>
                )
              })}
            </div>
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
                    ? `${t('category')}: ${activeCategory?.name}`
                    : t('all_categories')}
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
          <div className="w-[calc(50%-10px)] md:w-[200px]">
            <ClickOutside active={display} onClick={() => setDisplay(false)}>
              <div className="pt-[1.5rem] md:pb-[1.5rem]">
                <div className="flex items-center relative justify-end">
                  <div
                    className="cursor-pointer flex h-[3rem] w-[12rem] items-center p-[1rem] border border-[#C9C9C9]"
                    onClick={() => setDisplay(!display)}
                  >
                    {sorting ? sorting : t('sort')}
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
                                  g,
                                  c,
                                  b,
                                  sort: key,
                                  price_min,
                                  price_max,
                                }),
                              }}
                            >
                              <a
                                onClick={(e) => {
                                  handleClick(e, 'sort')
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
                          case t('product_category'):
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleProductCategoryElement(
                                      (prev) => !prev
                                    )
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {t('product_category')}
                                  </span>
                                  {toggleProductCategoryElement ? (
                                    <Minus />
                                  ) : (
                                    <Plus />
                                  )}
                                  {toggleProductCategoryElement && (
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
                                                  pathname,
                                                  query: filterQuery({
                                                    q,
                                                    g,
                                                    c: String(
                                                      typeof c === 'undefined'
                                                        ? cat.slug
                                                        : c + ',' + cat.slug
                                                    ),
                                                    b,
                                                    sort,
                                                    price_min,
                                                    price_max,
                                                  }),
                                                }}
                                              >
                                                <a
                                                  onClick={(e) => {
                                                    e.preventDefault()
                                                    router.push(
                                                      e.target.getAttribute(
                                                        'href'
                                                      ),
                                                      '',
                                                      { scroll: false }
                                                    )
                                                    // handleClick(e, 'categories')
                                                    setToggleProductCategoryElement(
                                                      false
                                                    )
                                                  }}
                                                  className={cn(
                                                    'text-[#161616] font-medium leading-6 text-[1rem] py-[0.25rem] inline-block',
                                                    {
                                                      'text--[#70877B]':
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
                          case t('price'):
                            return (
                              <li key={index}>
                                <div
                                  className="relative border-t  border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between"
                                  onClick={() =>
                                    setTogglePriceElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {togglePriceElement ? <Minus /> : <Plus />}
                                </div>
                                {togglePriceElement && (
                                  <div className="categories mt-[-0.5rem]">
                                    <Range
                                      values={values}
                                      step={STEP}
                                      min={MIN}
                                      max={MAX}
                                      onChange={(values) => {
                                        setValues(values)
                                        routeQuery['price_min'] = values[0]
                                        routeQuery['price_max'] = values[1]
                                        Router.push(
                                          {
                                            pathname: pathname,
                                            query: routeQuery,
                                          },
                                          undefined,
                                          { shallow: true }
                                        )
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
                          case t('reset_all'):
                            return (
                              <li key={index} className="hidden md:block">
                                <div className="relative border-none border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap">
                                  <Link
                                    href={{
                                      pathname,
                                    }}
                                  >
                                    <a className="underline">
                                      {t('reset_all')}
                                    </a>
                                  </Link>
                                </div>
                              </li>
                            )
                          case t('gender'):
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleGenderElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleGenderElement ? <Minus /> : <Plus />}
                                  {toggleGenderElement && (
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
                                                  pathname,
                                                  query: filterQuery({
                                                    q,
                                                    g: String(
                                                      typeof g === 'undefined'
                                                        ? cat.slug
                                                        : g + ',' + cat.slug
                                                    ),
                                                    c,
                                                    b,
                                                    sort,
                                                    price_min,
                                                    price_max,
                                                  }),
                                                }}
                                              >
                                                <a
                                                  onClick={(e) => {
                                                    e.preventDefault()
                                                    router.push(
                                                      e.target.getAttribute(
                                                        'href'
                                                      ),
                                                      '',
                                                      { scroll: false }
                                                    )
                                                    // handleClick(e, 'categories')
                                                    setToggleGenderElement(
                                                      false
                                                    )
                                                  }}
                                                  className={cn(
                                                    'text-[#161616] font-medium leading-6 text-[1rem] py-[0.25rem] inline-block',
                                                    {
                                                      'text--[#70877B]':
                                                        activeGender?.id ===
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
                          case t('brand'):
                            return (
                              <li className="accordion" key={index}>
                                <div
                                  className="relative border-t border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between flex-wrap"
                                  onClick={() =>
                                    setToggleBrandElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleBrandElement ? <Minus /> : <Plus />}
                                  {toggleBrandElement && (
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
                                                  pathname,
                                                  query: filterQuery({
                                                    q,
                                                    g,
                                                    c,
                                                    b: node.path.replace(
                                                      /^\/|\/$/g,
                                                      ''
                                                    ),
                                                    sort,
                                                    price_min,
                                                    price_max,
                                                  }),
                                                }}
                                              >
                                                <a
                                                  onClick={(e) => {
                                                    e.preventDefault()
                                                    router.push(
                                                      e.target.getAttribute(
                                                        'href'
                                                      ),
                                                      '',
                                                      { scroll: false }
                                                    )
                                                    // handleClick(e, 'brands')
                                                    setToggleBrandElement(false)
                                                  }}
                                                  className={cn(
                                                    'text-[#161616] font-medium leading-6 text-[1rem] py-[0.25rem] inline-block',
                                                    {
                                                      'text-[#70877B] ':
                                                        (activeBrand as any)
                                                          ?.entityId ===
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
                          case t('size'):
                            return (
                              <li key={index}>
                                <div
                                  className="relative border-t  border-[#C9C9C9] py-[1rem] cursor-pointer flex justify-between"
                                  onClick={() =>
                                    setToggleSizeElement((prev) => !prev)
                                  }
                                >
                                  <span className="text-[#161616] font-semibold text-xl">
                                    {name}
                                  </span>
                                  {toggleSizeElement ? <Minus /> : <Plus />}
                                </div>
                                {toggleSizeElement && (
                                  <div className="categories grid grid-cols-4 gap-y-[0.8rem]">
                                    {sizes.map((item, index) => {
                                      return (
                                        <div
                                          key={index}
                                          className="border border-[#C9C9C9] w-[3rem] h-[2.5rem] hover:bg-[#70877B] hover:text-white hover:border-[#70877B] flex items-center justify-center cursor-pointer  font-medium  leading-6 text-[1rem] uppercase"
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
            <div className="block md:hidden">
              {tagsGender.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#C9C9C9] font-medium text-[1rem] inline-block p-2 pr-10 mr-2 mb-2 relative"
                  >
                    {t(item.slug)}
                    <button
                      onClick={(e) => {
                        tagsGender.splice(index, 1)
                        let genderIds: String[] = []
                        tagsGender.map((item, index) => {
                          genderIds.push(item.slug)
                        })
                        router.push(
                          {
                            pathname,
                            query: filterQuery({
                              q,
                              g: String(genderIds.toString()),
                              c,
                              b,
                              sort,
                              price_min,
                              price_max,
                            }),
                          },
                          '',
                          { scroll: false }
                        )
                      }}
                      className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none cursor-pointer"
                    >
                      <Cross className="h-6 w-6 absolute top-2 right-2" />
                    </button>
                  </div>
                )
              })}
              {tagsCategory.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#C9C9C9] font-medium text-[1rem] inline-block p-2 pr-10 mr-2 mb-2 relative"
                  >
                    {item.name}
                    <button
                      onClick={(e) => {
                        tagsCategory.splice(index, 1)
                        let categoryIds: String[] = []
                        tagsCategory.map((item, index) => {
                          categoryIds.push(item.slug)
                        })
                        router.push(
                          {
                            pathname,
                            query: filterQuery({
                              q,
                              g,
                              c: String(categoryIds.toString()),
                              b,
                              sort,
                              price_min,
                              price_max,
                            }),
                          },
                          '',
                          { scroll: false }
                        )
                      }}
                      className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none cursor-pointer"
                    >
                      <Cross className="h-6 w-6 absolute top-2 right-2" />
                    </button>
                  </div>
                )
              })}
            </div>
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
                      {t('showing')} {data.products.length} {t('results')}{' '}
                      {q && (
                        <>
                          {t('for')} "<strong>{q}</strong>"
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
                          {t('there_are_no_products_that_match')} "
                          <strong>{q}</strong>"
                        </>
                      ) : (
                        <>
                          {t(
                            'there_are_no_products_that_match_the_selected_category'
                          )}
                        </>
                      )}
                    </span>
                  </>
                ) : q ? (
                  <>
                    {t('searching_for')}: "<strong>{q}</strong>"
                  </>
                ) : (
                  <>{t('searching')}</>
                )}
              </div>
            )}
            <div className="block md:hidden pb-[1rem] float-right">
              <Link
                href={{
                  pathname,
                }}
              >
                <a className="underline">{t('reset_all')}</a>
              </Link>
            </div>
            <div className="clear-both"></div>
            {data && data.found == true ? (
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
