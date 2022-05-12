import Image from 'next/image'
import React from 'react'
import { AiOutlineEllipsis } from 'react-icons/Ai'
import { VscComment } from 'react-icons/vsc'

function Post1() {
  return (
    <div className="bg-background flex flex-col rounded-lg border-2 border-border-light px-5">
      <div className="flex w-full items-center  justify-between pb-4 pt-6 text-lg text-textColor-light">
        <div className="flex items-center">
          <div className="h-11 w-11 rounded-full">
            <Image src="/images/User1.png" height={44} width={44} />
          </div>
          <div className="ml-6 flex flex-col">
            <p className="text-white">Theresa Webb</p>
            <p className="text-white">5mins ago</p>
          </div>
        </div>
        <AiOutlineEllipsis />
      </div>
      <div className="flex items-center rounded-lg border-2 border-border-light bg-background-newPost py-4 px-4">
        <div className=" h-12 w-12 rounded-full bg-background-light text-center ">
          <div className="h-12 w-12 pt-3.5 ">
            <Image src="/icons/Hi.png" height={20} width={20} />
          </div>
        </div>
        <p className="px-4 text-base text-textColor-light">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="flex items-center pt-4 pb-6">
        <VscComment className="text-textColor-light" />
        <span className="ml-2 text-textColor-light">24 comments</span>
      </div>
    </div>
  )
}

export default Post1
