import Image from 'next/image'
import React from 'react'

function CreatePost() {
  return (
    <div className="bg-background flex flex-col rounded-lg border-2 border-border-light px-5">
      <p className="pb-4 pt-6 text-lg text-textColor-light">Create post</p>
      <div className="flex items-center rounded-lg border-2 border-border-light bg-background-newPost py-4 px-4">
        <div className=" h-12 w-12 rounded-full bg-background-light text-center ">
          <div className="h-12 w-12 pt-3.5 ">
            <Image src="/icons/thought.png" height={20} width={20} />
          </div>
        </div>
        <input
          placeholder="How are you feeling today?"
          className="ml-4 w-full bg-background-newPost py-2 text-textColor-light focus-within:outline-0"
        />
      </div>
      <div className="pt-4 pb-6">
        <button className="float-right rounded-lg bg-button-blue py-2 px-9 text-white">
          Post
        </button>
      </div>
    </div>
  )
}

export default CreatePost
