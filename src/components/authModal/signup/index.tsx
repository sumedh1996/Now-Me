import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiEyeOff } from 'react-icons/Hi'
import { HiEye } from 'react-icons/Hi'
import { AiFillCloseCircle } from 'react-icons/Ai'

function SignUpModalContent({ setIsLogin, closeModal }: any) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [togglePassword, setTogglePassword] = useState(false)

  return (
    <div>
      <div>
        <AiFillCloseCircle
          onClick={closeModal}
          size={32}
          className={'float-right text-white'}
        />
      </div>
      <div className="w-full pt-4 text-center">
        <p className="text-sm text-textColor-dark ">SIGN UP</p>
        <p className="pt-1 text-lg text-white">Create an account to continue</p>
      </div>
      <div className=" pb-4 pt-8">
        <p className="pb-2.5 text-textColor-light">Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-border-light bg-background-light p-2 text-textColor-white placeholder:text-textColor-placeholder after:border-border-light focus-within:outline-0 active:border-border-light"
          placeholder="Enter your email"
        />
      </div>
      <div className="pb-4">
        <p className="pb-2.5 text-textColor-light">Username</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full rounded-lg border border-border-light bg-background-light p-2 text-textColor-white placeholder:text-textColor-placeholder after:border-border-light focus-within:outline-0 active:border-border-light"
          placeholder="Choose a preferred username"
        />
      </div>
      <div className="">
        <p className="pb-2.5 text-textColor-light">Password</p>
        <div className="flex items-center justify-between rounded-lg border border-border-light ">
          <input
            type={togglePassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-background-light p-2 text-textColor-white placeholder:text-textColor-placeholder  focus-within:outline-0"
            placeholder="Choose a strong password"
          />
          {togglePassword ? (
            <HiEyeOff
              className="mr-2 cursor-pointer text-textColor-light"
              onClick={() => setTogglePassword(!togglePassword)}
              size={25}
            />
          ) : (
            <HiEye
              className="mr-2  cursor-pointer text-textColor-light"
              onClick={() => setTogglePassword(!togglePassword)}
              size={25}
            />
          )}
        </div>
      </div>
      <div className=" pt-[20px]  ">
        <Link href={'/home'}>
          <button className="w-full rounded-lg bg-button-blue p-2 text-white">
            Continue
          </button>
        </Link>
      </div>
      <p
        className="cursor-pointer pt-3 text-textColor-dark"
        onClick={() => setIsLogin(true)}
      >
        Already have an account?{' '}
        <span className="text-textColor-light">Login →</span>
      </p>
    </div>
  )
}

export default SignUpModalContent
