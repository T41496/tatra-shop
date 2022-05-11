import Link from 'next/link'
import s from './Banner.module.css'

const links = ['men', ' women']
export const Category = () => {
  return (
    <div className="grid h-[calc(100vh_-_104px)] bg-[url('/assets/category-bg.png')] bg-cover justify-center items-center mb-[9rem]">
      <div className="flex flex-col">
        {links.map((item) => {
          return (
            <Link href={`/${item}`}>
              <a className="uppercase text-[#70877B] bg-[#FFFFFF] mr-auto mt-6 px-11 py-2 text-2xl w-[11.2rem] text-center font-medium">
                {item}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
export default Category
