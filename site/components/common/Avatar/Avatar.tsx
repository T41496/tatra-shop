import { FC, useRef, useEffect } from 'react'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>

  return (
    <div ref={ref} className="inline-block h-7 w-7">
      <img src="/user-icon.svg" alt="user icon" />
    </div>
  )
}

export default Avatar
