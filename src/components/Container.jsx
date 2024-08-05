import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:px-20 mt-3 flex flex-col  min-h-screen px-6 '>{children}</div>
  )
}

export default Container