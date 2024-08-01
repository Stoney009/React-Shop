import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:px-10 mt-3 flex flex-col h-screen px-3 '>{children}</div>
  )
}

export default Container