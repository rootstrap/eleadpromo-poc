import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('URL_DEL_ENDPOINT_DE_LOGIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        console.log('Login exitoso:', result)
        // Maneja el almacenamiento del token o redirige al usuario
      } else {
        console.error('Error en el login:', result.message)
      }
    } catch (error) {
      console.error('Error en la solicitud de login')
    }
  }

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Existing Customer :</h2>
      <p className="mb-4">
        To login, please enter your email address and password.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="emailLogin" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="emailLogin"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="passwordLogin" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="passwordLogin"
            className="mt-1 block w-full border-gray-300 rounded shadow-sm"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <div className="mb-4">
          <a href="#" className="text-green-600">
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded shadow"
        >
          Login
        </button>
        <div className="mt-4">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="ml-2 text-gray-700">
            Remember me when I return
          </label>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
