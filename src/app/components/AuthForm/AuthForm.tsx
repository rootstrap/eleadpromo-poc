'use client'

import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthForm = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RegisterForm />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
