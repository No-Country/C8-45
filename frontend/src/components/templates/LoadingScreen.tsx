import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const LoadingScreen = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center '>
        <span className='text-5xl text-blue-600 animate-spin'><CgSpinner/></span>
        <span className='text-3xl text-blue-600 font-title mt-4'>LOADING</span>
    </section>
  )
}

export default LoadingScreen