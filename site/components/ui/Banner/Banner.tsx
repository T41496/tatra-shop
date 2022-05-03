import Link from 'next/link'
import s from './Banner.module.css'

export const Banner = () => {
  return (
    <div className="grid grid-cols-3 h-[calc(100vh_-_104px)] mb-[9rem]">
      <div className="bg-[#70877B] flex justify-center h-[inherit]">
        <div className="flex flex-col self-center">
          <h1 className="text-white font-bold text-4xl uppercase font-bold">
            tatra hills
          </h1>
          <p className="text-white text-2xl font-normal max-w-[22rem] mt-2">
            Save the planet - give the clothes a second life
          </p>
          <Link href="/search">
            <a className="uppercase text-[#70877B] bg-[#FFFFFF] mr-auto mt-8 px-11 py-2 text-2xl font-medium">
              catalog
            </a>
          </Link>
        </div>
      </div>
      <div className="col-span-2 h-[inherit]">
        <div className="grid grid-cols-2 gap-3 h-[inherit]">
          <div
            className={`bg-[url('/assets/banner/photo-1.png')] bg-cover`}
          ></div>
          <div
            className={`bg-[url('/assets/banner/photo-2.png')] bg-cover`}
          ></div>
          <div
            className={`bg-[url('/assets/banner/photo-3.png')] bg-cover`}
          ></div>
          <div
            className={`bg-[url('/assets/banner/photo-4.png')] bg-cover`}
          ></div>
        </div>
        <div className="arrows flex justify-center mt-[1rem]">
          <img
            src="./arrow-icon.svg"
            alt="arrow icon left"
            className="cursor-pointer mx-[0.5rem]"
          />
          <img
            src="./arrow-icon.svg"
            alt="arrow icon right"
            className="rotate-180 cursor-pointer mx-[0.5rem]"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
