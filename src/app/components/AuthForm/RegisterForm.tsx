import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    // Implementa la lógica para el registro
    console.log('Registro de nuevo usuario:', data)
  }

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">New Customer :</h2>
      <p className="mb-4">
        If you are not registered, please enter your account information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500">First Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500">Last Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="emailRegister" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="emailRegister"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="passwordRegister" className="block text-gray-700">
            Create New Password
          </label>
          <input
            type="password"
            id="passwordRegister"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="text-red-500">
              Password is required (min 6 chars)
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded shadow"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
