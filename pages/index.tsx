import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiEyeOff } from 'react-icons/Hi'
import { HiEye } from 'react-icons/Hi'

export interface ILogin {
  userName: string
  password: string
}

const Login: NextPage = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const [togglePassword, setTogglePassword] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-2">
      <div className="m-auto h-[463px] w-[420px] rounded-lg border-2 border-border-card bg-background-light ">
        <div className="mt-10 w-full text-center">
          <p className="text-sm text-textColor-dark">WELCOME BACK</p>
          <p className="text-lg text-white">Log into your account</p>
        </div>
        <div className="px-6 pb-4 pt-[45px]">
          <p className="pb-2.5 text-textColor-light">Email or Username</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full rounded-lg border border-border-light bg-background-light p-2 text-textColor-white placeholder:text-textColor-placeholder after:border-border-light focus-within:outline-0 active:border-border-light"
            placeholder="Enter your email or username"
          />
        </div>
        <div className="px-6">
          <div className="flex w-full justify-between">
            <p className="pb-2.5 text-textColor-light">Password</p>
            <p className="pb-2.5 text-textColor-light">Forgot Password</p>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border-light ">
            <input
              type={togglePassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background-light p-2 text-textColor-white placeholder:text-textColor-placeholder  focus-within:outline-0"
              placeholder="Enter your email or username"
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
        <div className=" mx-6 pt-[20px] ">
          <Link href={'/home'}>
            <button className="w-full rounded-lg bg-button-blue p-2 text-white">
              Login now
            </button>
          </Link>
        </div>
        <p className="px-6 pt-3 text-textColor-dark">
          Not registered yet?{' '}
          <span className="text-textColor-light">Register →</span>
        </p>
      </div>
    </div>
  )
}

export default Login
