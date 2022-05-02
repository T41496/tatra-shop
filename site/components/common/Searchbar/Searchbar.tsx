import { FC, memo, useEffect } from 'react'
import cn from 'clsx'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search' }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.key === 'Enter') {
      const q = e.currentTarget.value

      router.push(
        {
          pathname: `/search`,
          query: q ? { q } : {},
        },
        undefined,
        { shallow: true }
      )
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={s.input}
        placeholder="Search"
        defaultValue={router.query.q}
        onKeyUp={handleKeyUp}
      />
      <div className={s.iconContainer}>
        <img src="./search-icon.svg" alt="search icon" className={s.icon} />
      </div>
    </div>
  )
}

export default memo(Searchbar)
