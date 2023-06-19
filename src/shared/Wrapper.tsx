import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-2'>
      {children}
    </div>
  )
}

export default Wrapper
