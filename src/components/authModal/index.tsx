import React, { useState } from 'react'
import SignInModalContent from './signIn'
import SignUpModalContent from './signup'

function AuthModal({ closeModal }: any) {
  const [isLogin, setIsLogin] = useState(false)

  return isLogin ? (
    <SignInModalContent setIsLogin={setIsLogin} closeModal={closeModal} />
  ) : (
    <SignUpModalContent setIsLogin={setIsLogin} closeModal={closeModal} />
  )
}

export default AuthModal
