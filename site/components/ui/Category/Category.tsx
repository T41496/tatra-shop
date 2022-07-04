import Link from 'next/link'
import s from './Banner.module.css'
import { useTranslations } from 'next-intl'

export const Category = () => {
  const t = useTranslations('category')

  const links = [
    {
      key: 'men',
      value: t('men'),
    },
    {
      key: 'women',
      value: t('women'),
    },
  ]

  return (
    <div className="grid h-[calc(100vh_-_104px)] bg-[url('/assets/category-bg.png')] bg-cover justify-center items-center mb-[6rem]">
      <div className="flex flex-col">
        {links.map((item, index) => {
          return (
            <Link key={index} href={`/search?g=${item.key}`}>
              <a className="uppercase text-[#70877B] bg-[#FFFFFF] mr-auto mt-6 px-11 py-2 text-2xl w-[11.2rem] text-center font-medium">
                {item.value}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Category
