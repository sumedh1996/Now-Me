import React from 'react'
import CreatePost from '../src/components/createPost'
import Post1 from '../src/components/post1'
import Post from '../src/components/post1'
import Post2 from '../src/components/post2'
import Modal from 'react-modal'
import ReactModal from 'react-modal'
import AuthModal from '../src/components/authModal'

function HomeScreen() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  function closeModal() {
    setIsModalOpen(false)
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  function openModal() {
    setIsModalOpen(true)
  }
  return (
    <div className=" min-h-screen  bg-black py-2">
      <div className="container mx-auto h-full  ">
        <h1
          className="pt-8 text-[28px] font-medium text-textColor-light"
        >
          Hello Jane
        </h1>
        <p className="w-4/5 pt-3 text-textColor-dark">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <div className="pt-6 pb-4">
          <CreatePost openModal={openModal} />
        </div>
        <div className="pb-4">
          <Post1 />
        </div>
        <div className="pb-10">
          <Post2 />
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            position: 'absolute',
            width: 463,
            height: 506,
            margin: 'auto',
            background: '#27292D',
          },
        }}
      >
        <AuthModal closeModal={closeModal} />
      </ReactModal>
    </div>
  )
}

export default HomeScreen
