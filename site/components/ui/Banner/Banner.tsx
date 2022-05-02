import Link from 'next/link'
import s from './Banner.module.css'

const photos = ['photo-1', 'photo-2', 'photo-3', 'photo-4']
export const Banner = () => {
  return (
    <div className="grid grid-cols-3 h-[calc(100vh_-_104px)]">
      <div className="bg-[#70877B] flex justify-center">
        <div className="flex flex-col self-center">
          <h1 className="text-white">tatra hills</h1>
          <p className="text-white">
            Save the planet - give the clothes a second life
          </p>
          <Link href="/cart">
            <a>sdf</a>
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-3">
          {photos.map((item) => {
            return (
              <div>
                <img src={`./assets/banner/${item}.png`} alt={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Banner
