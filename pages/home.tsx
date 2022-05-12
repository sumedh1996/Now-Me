import React from 'react'
import CreatePost from '../src/components/createPost'
import Post1 from '../src/components/post1'
import Post from '../src/components/post1'
import Post2 from '../src/components/post2'
import Modal from 'react-modal'

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
          onClick={openModal}
        >
          Hello Jane
        </h1>
        <p className="w-4/5 pt-3 text-textColor-dark">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <div className="pt-6 pb-4">
          <CreatePost />
        </div>
        <div className="pb-4">
          <Post1 />
        </div>
        <div className="pb-10">
          <Post2 />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        //  style={customStyles}
        className="bg-red-400"
        overlayClassName="bg-red-400"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  )
}

export default HomeScreen
