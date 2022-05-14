import s from './SimilarProducts.module.css'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SimilarProducts: FC = () => {
  return (
    <div className="w-full">
      <h1 className={s.title}>Similar products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10 md:mb-20">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item.picture} width={410} height={406} alt="" />
              <h1 className={s.productName}>{item.name}</h1>
              <p className={s.Size}>Size: {item.size}</p>
              <h3 className={s.price}>{item.price}</h3>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center mb-10 md:mb-20">
        <Link href={'/'}>
          <span className="text-white text-lg sm:text-2xl text-center flex justify-center items-center bg-[#70877B] w-[135px] h-[40px] sm:w-[280px] sm:h-[80px] cursor-pointer">
            Catalog
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SimilarProducts

const data = [
  {
    picture: '/assets/image 40.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 41.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 42.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
  {
    picture: '/assets/image 43.png',
    name: "JACKET MEN'S JACKET",
    size: 'M',
    price: '105 €',
  },
]
