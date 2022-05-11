import React, { FC } from 'react'
import s from './Hero.module.css'
import Link from 'next/link'

const SignUp: FC = () => {
  return (
    <div className="flex flex-col justify-center mt-[7rem] mb-[7rem]">
      <h2 className="text-center font-medium text-3xl">
        Sign up Tatra hills emails
      </h2>
      <div className="flex justify-center mt-[2rem]">
        <input
          type="email"
          className="py-2 h-[auto] bg-[transparent] outline-none px-[1rem] border border-[#C9C9C9] w-[22rem]"
        />
        <button className="uppercase text-[#FFFFFF] bg-[#70877B] px-6 py-2 text-2xl w-[fit-content] text-center font-medium">
          sign me up!
        </button>
      </div>
    </div>
  )
}

export default SignUp
