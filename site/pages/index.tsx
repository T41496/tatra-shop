import commerce from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Marquee, Hero, Banner, Category } from '@components/ui'
import Link from 'next/link'

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
    },
    revalidate: 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className="grid  grid-cols-[320px_minmax(900px,_1fr)_100px] ">
        <div className="flex justify-center items-center flex-col">
          <div>
            <p className="text-[1.9rem] max-w-[14.2rem] font-medium mb-6">
              Want to see the blog in detail?
            </p>
            <Link href={`/search}`}>
              <a className="uppercase text-[#FFFFFF] bg-[#70877B]  px-11 py-2 text-2xl w-[11.2rem] text-center font-medium">
                blog
              </a>
            </Link>
          </div>
        </div>

        <Marquee>
          <div className="flex w-[320px] h-[320px] bg-[url('/assets/topics/photo-1.png')] bg-cover mx-[0.5rem] justify-center items-center">
            <span className="text-white font-medium text-4xl">Brand</span>
          </div>
          <div className="flex w-[320px] h-[320px] bg-[url('/assets/topics/photo-2.png')] bg-cover mx-[0.5rem] justify-center items-center">
            <span className="text-white font-medium text-4xl">Travel</span>
          </div>
          <div className="flex w-[320px] h-[320px] bg-[url('/assets/topics/photo-2.png')] bg-cover mx-[0.5rem] justify-center items-center">
            <span className="text-white font-medium text-4xl">Mountains</span>
          </div>
        </Marquee>
      </div>
      {/* <Hero
        headline=" Dessert dragée halvah croissant."
        description="Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll cheesecake pie carrot cake. "
      /> */}
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
