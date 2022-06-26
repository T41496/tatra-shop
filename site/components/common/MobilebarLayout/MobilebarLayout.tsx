import React, { FC } from 'react'
import { Cross, ChevronLeft } from '@components/icons'
import { UserNav } from '@components/common'
import { Logo } from '@components/ui'
import cn from 'clsx'
import s from './MobilebarLayout.module.css'
import { I18nWidget } from '@components/common'
import Link from 'next/link'

type ComponentProps = { className?: string } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
)

const MobilebarLayout: FC<ComponentProps> = ({
  children,
  className,
  handleBack,
  handleClose,
}) => {
  return (
    <div className={cn(className, s.root)}>
      <header className={s.header}>
        <Link href="/">
          <a className={s.logo} aria-label="Logo">
            <Logo />
          </a>
        </Link>
        <UserNav className={s.usernav} />
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none ml-6"
          >
            <Cross className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-sm hidden">Close</span>
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-xs">Back</span>
          </button>
        )}
      </header>
      <div className={s.container}>
        {children}
        <div className={cn('block md:hidden', s.mobileLanguageSwitch)}>
          <I18nWidget />
        </div>
      </div>
    </div>
  )
}

export default MobilebarLayout
