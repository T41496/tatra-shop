import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero, Banner, Category, SignUp } from '@components/ui'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const productsPromise = commerce.getAllProducts({
    variables: { first: 6 },
    config,
    preview,
    // Saleor provider only
    ...({ featured: true } as any),
  })
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { products } = await productsPromise
  const { pages } = await pagesPromise
  const { categories, brands } = await siteInfoPromise

  return {
    props: {
      products,
      categories,
      brands,
      pages,
      messages: (await import(`../lang/${locale}.json`)).default,
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useTranslations('index')
  return (
    <>
      <Banner />
      <Category />
      {/* <Grid variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
              priority: true,
            }}
          />
        ))}
      </Grid> */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 justify-center items-center p-6 m-auto">
          <p className="text-[1.9rem] max-w-[14.2rem] font-medium md:mb-6">
            {t('blog_text')}
          </p>
          <div className="hidden md:block">
            <Link href="/blogs">
              <a className="invisible md:visible uppercase text-[#FFFFFF] bg-[#70877B]  px-11 py-2 text-2xl w-[11.2rem] text-center font-medium">
                {t('blog_link')}
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/4 ">
          <Marquee>
            <div className="flex w-[200px] md:w-[320px] h-[200px] md:h-[320px] bg-[url('/assets/topics/photo-1.png')] bg-cover mx-[0.5rem] justify-center items-center">
              <span className="text-white font-medium text-4xl">
                {t('blog_brand')}
              </span>
            </div>
            <div className="flex w-[200px] md:w-[320px] h-[200px] md:h-[320px] bg-[url('/assets/topics/photo-2.png')] bg-cover mx-[0.5rem] justify-center items-center">
              <span className="text-white font-medium text-4xl">
                {t('blog_travel')}
              </span>
            </div>
            <div className="flex w-[200px] md:w-[320px] h-[200px] md:h-[320px] bg-[url('/assets/topics/photo-3.png')] bg-cover mx-[0.5rem] justify-center items-center">
              <span className="text-white font-medium text-4xl">
                {t('blog_mountains')}
              </span>
            </div>
          </Marquee>
          <div className="block md:hidden text-center mt-10">
            <Link href="/blogs">
              <a className="uppercase text-[#FFFFFF] bg-[#70877B]  px-11 py-2 text-2xl w-[11.2rem] text-center font-medium">
                {t('blog_link')}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Hero />
      <SignUp />
      {/* <Grid layout="B" variant="filled">
        {products.slice(0, 3).map((product: any, i: number) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid> */}
      {/* <Marquee>
        {products.slice(3).map((product: any, i: number) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee> */}
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
