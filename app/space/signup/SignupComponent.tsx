import React from 'react'

type Props = {}

const SignupComponent = (props: Props) => {
  return (
    <div>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">


        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
        <h1 className="text-center text-2xl font-bold text-black sm:text-3xl mt-3">Get started today</h1>

<p className="mx-auto mt-4 max-w-md text-center text-gray-500">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
  inventore quaerat mollitia?
</p>
          <p className="text-center text-lg font-medium">Sign in to your account</p>

          <div className="mt-6 flex space-x-4">
  <button
    type="button"
    className="flex items-center justify-center w-1/2 rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      viewBox="0 0 48 48"
    >
      <path fill="#4285F4" d="M24 9.5c3.5 0 6.7 1.4 9.2 3.6l6.8-6.8C34.7 3 29.7 1 24 1 14.6 1 6.7 7.8 3.4 17.6l7.9 6.2c1.7-5.7 6.9-9.8 12.7-9.8z" />
      <path fill="#34A853" d="M24 44.5c5.6 0 10.5-2.1 14.2-5.6l-7.8-6.2c-1.8 1.4-4.1 2.4-6.4 2.4-4.9 0-9.1-3.2-10.5-7.6H3.5v6.4C6.8 39.9 14.5 44.5 24 44.5z" />
      <path fill="#FBBC05" d="M46.1 24.5c0-1.5-.1-3-.4-4.4H24v8.3h12.6c-.5 2.7-1.9 5-4 6.7l7.8 6.2c4.6-4.2 6.7-9.6 6.7-16.8z" />
      <path fill="#EA4335" d="M3.5 17.6c-2.7 5.2-2.7 11.3 0 16.5l7.9-6.2c-1.8-5.7-1.8-11.6 0-16.5l-7.9-6.2z" />
    </svg>
    Sign in with Google
  </button>

  <button
    type="button"
    className="flex items-center justify-center w-1/2 rounded-lg border bg-white px-4 py-3 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      viewBox="0 0 24 24"
    >
      <path
        fill="#000"
        d="M16.365 1.997c.78.944 1.475 2.19 1.476 3.562-.002 1.245-.45 2.294-1.131 3.185-.775 1.025-1.912 1.727-3.11 1.74-1.176-.016-2.275-.728-3.03-1.736-.684-.891-1.13-1.94-1.128-3.185.002-1.372.696-2.618 1.476-3.562.788-.957 1.79-1.635 2.784-1.648 1.075.016 2.064.72 2.776 1.644zM12.01 22.034c-2.996-.003-5.673-1.267-7.567-3.317-1.751-1.869-2.854-4.48-2.85-7.14.006-2.554.924-4.77 2.496-6.234C6.617 3.909 8.87 2.953 11.23 2.95c2.362.003 4.61.96 6.14 2.394 1.572 1.463 2.496 3.679 2.492 6.234-.004 2.66-1.104 5.272-2.854 7.14-1.898 2.05-4.571 3.313-7.568 3.316z"
      />
    </svg>
    Sign in with Apple
  </button>
</div>


          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                id="email"
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                id="password"
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignupComponent